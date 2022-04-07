import axios from "axios";
import { Button, Modal, FormControl, Input, Alert } from "native-base";
import React, { useState } from "react";

export default function AddTodo(props) {
  const url = "https://api.kontenbase.com/query/api/v1";
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");

  const [todo, setTodos] = useState([]);

  const getTodos = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos"
      );

      setTodos(res.data);
      console.log(res.data);
      console.log(todo);
    } catch (error) {
      alert("Data Not Found");
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const data = {
        title,
      };

      const getdata =
        "https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos";

      const response = await axios.post(`${getdata}`, data);
      setTitle("");
      getTodos();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const _renderItem = ({ item }) => {
    /*  console.log(item); */
    return (
      <List key={item.id} my={2} spacing={2} bg="primary.50" borderRadius={10}>
        <List.Item>
          <HStack space={6} w="100%">
            <MaterialCommunityIcons
              onPress={() => handleDelete(item._id)}
              name="delete-empty"
              size={24}
              color="red"
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginLeft: -10,
                paddingTop: 3,
              }}
            >
              {item.title}
            </Text>
          </HStack>
        </List.Item>
      </List>
    );
  };

  const onPressButton = () => {
    handleSubmit();
    setShowModal(false);
    getTodos();
  };

  return (
    <>
      <Button
        bg="primary.700"
        onPress={() => setShowModal(true)}
        style={{ width: 90, backgroundColor: "#3F0713" }}
      >
        Add Todo
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" style={{ backgroundColor: "#F1D1D0" }}>
          <Modal.Header>Add Todo</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input
                value={title}
                autoFocus={true}
                onChangeText={(nextValue) => setTitle(nextValue)}
                style={{ backgroundColor: "#fff" }}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#F1D1D0" }}>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                color="#3F0713"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={onPressButton}
                style={{ backgroundColor: "#3F0713" }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
