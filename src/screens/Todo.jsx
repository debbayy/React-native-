import { StatusBar } from "expo-status-bar";
import { Box } from "native-base";
import React from "react";
import Layout from "../components/Layout";
import ListTodo from "../components/ListTodo";

export default function Todo() {
  return (
    <Layout>
      <StatusBar />
      <Box mt={5} mx={5} flex={1}>
        <ListTodo />
      </Box>
    </Layout>
  );
}
