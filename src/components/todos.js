import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Platform,
  animationType,
} from "react-native";
import { Modal, Center, Input, Button, FormControl } from "native-base";
import Layout from "../components/Layout";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const COLORS = { primary: "#1f145c", white: "#fff" };
import axios from "axios";

import { useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const getTodos = async () => {
    /*  setIsLoading(true); */
    try {
      const res = await axios.get(
        "https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos"
      );

      setTodos(res.data);
      console.log(res);
    } catch (error) {
      alert("Data Not Found");
      /* setIsLoading(false); */
    }
  };

  const [title, setTitle] = useState({ title: "" });
  const addTodo = async () => {
    try {
      const data = {
        title,
      };

      const adddata =
        "https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos";

      const response = await axios.post(`${adddata}`, data);
      getTodos();
      setTitle("");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [action, setAction] = useState(false);
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(
        `https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos/${id}`
      );
      setAction(!action);
    } catch (error) {
      console.log(error);
    }
  };

  // btn update todo
  const [idUpdate, setIdUpdate] = useState();
  const btnUpdateTodo = async (id) => {
    try {
      console.log(id);
      setShowModal(true), setIdUpdate(id);
    } catch (error) {
      alert("Failed to delete resource");
      console.log(error);
    }
  };

  // update todo
  /* const [newTodo, setNewTodo] = useState(); */
  const updateTodo = async () => {
    try {
      const response = await axios.patch(
        `https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos/${idUpdate}`,
        title
      );
//console.log(response);
      setShowModal(false);
      setTodos([]);
      getTodos();
      setTodos(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const btnDoneTodo = async (id) => {
    try {
    } catch (error) {
      alert("Failed to delete resource");
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [action]);

  return (
    <View style={{ height: "100%", backgroundColor: "#fda4af" }}>
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Edit Todo</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Title</FormControl.Label>
                <Input
                  onChangeText={(text) => setTitle({ title: text })}
                  //   value={title}
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                {/* <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button> */}
                <Button onPress={() => updateTodo()} value={title}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: COLORS.primary,
          textAlign: "center",
          marginVertical: 20,
        }}
      >
        TODO APP
      </Text>

      <View
        style={{
          display: "flex",
          width: "95%",
          marginStart: 10,
        }}
      >
        {todos.map((item) => {
          return (
            <View style={styles.listItem} key={item._id}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.primary,
                    // textDecorationLine: item?.completed
                    //   ? "line-through"
                    //   : "none",
                  }}
                >
                  {item.title}
                </Text>
              </View>

              <TouchableOpacity>
                {/* <View
                  onPress={() => handleDelete(item._id)}
                  style={[styles.actionIcon, { backgroundColor: "green" }]}
                >
                  <Icon name="done" size={20} color="white" />
                </View> */}
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.actionIcon}>
                  <Icon
                    onPress={() => handleDelete(item._id)}
                    name="delete"
                    size={20}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.actionIconEdit}>
                  <Icon
                    onPress={() => btnUpdateTodo(item._id)}
                    name="edit"
                    size={20}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              padding: 5,
              marginHorizontal: -20,
              borderRadius: 50,
              border: "none",
            }}
            value={title}
            placeholder="Add Todo"
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fda4af",
  },
  inputContainer: {
    height: 30,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    borderRadius: 30,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginLeft: 5,
    borderRadius: 3,
  },
  actionIconEdit: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    marginLeft: 5,
    borderRadius: 3,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Todos;
