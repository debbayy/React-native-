import React, { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { List, Box, Text, HStack } from "native-base";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Svg, { Circle, SvgUri } from "react-native-svg";
import axios from "axios";
import AddTodo from "../screens/AddTodo";
import iconTodo from "../../assets/ICON.svg";

export default function ListTodo() {
  const url =
    "https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos";

  const [todo, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState(false);

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

  //submit
  const handleSubmit = async () => {
    try {
      const data = {
        title,
      };

      const getdata =
        "https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos";

      const response = await axios.post(`${getdata}`, data);
      setTitle("");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `https://api.kontenbase.com/query/api/v1/b97b9784-95d8-4abd-806b-18875d222b49/todos/${id}`
      );
      setAction(!action);
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

  useEffect(() => {
    getTodos();
    
  }, [action]);

  return (
    <Box mt={5} mx={5} flex={1}>
      <HStack>
        <Text
          mb={2}
          fontWeight="bold"
          style={{ marginRight: 93, fontSize: 19, color: "#3F0713" }}
        >
          TODO LIST
        </Text>
        <AddTodo />
      </HStack>
      {todo?.length < 1 ? (
        <Box flex={1} alignItems="center" justifyContent="center" mt="10">
          <AntDesign name="frowno" size={100} color="#AA2B1D" />
          <Text alignItems="center" fontSize="20" mt="17" color="#AA2B1D">
            Upss List Is ...
          </Text>
          {/* <Image source={iconTodo} width="200" height="200" /> */}
        </Box>
      ) : (
        <FlatList
          style={{ marginTop: 20 }}
          data={todo}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          refreshing={isLoading}
          onRefresh={getTodos}
        />
      )}
    </Box>
  );
}
