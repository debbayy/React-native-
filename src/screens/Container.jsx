import React from "react";
import {
  View,
  Text,
  Box,
  Heading,
  Button,
  ScrollView,
  Footer,
} from "native-base";
import { Alert } from "react-native";
import Layout from "../components/Layout";

export default function Calculator() {
  const style = require("../../style");

  const [currentNumber, setCurrentNumber] = React.useState("");
  const [lastNumber, setLastNumber] = React.useState("");

  const handlePress = (btnPressed) => {
    try {
      if (
        btnPressed === "+" ||
        btnPressed === "-" ||
        btnPressed === "*" ||
        btnPressed === "/"
      ) {
        setCurrentNumber(currentNumber + btnPressed);
        return;
      }

      switch (btnPressed) {
        case "DEL":
          setCurrentNumber(
            currentNumber.substring(0, currentNumber.length - 1)
          );
          return;
        case "C":
          setCurrentNumber("");
          return;
        case "%":
          setCurrentNumber(currentNumber * 0.01);
          return;
        case "=":
          calculate();
          return;
      }
      setCurrentNumber(currentNumber + btnPressed);
    } catch (error) {
      Alert.alert("Failed", "Invalid Arguments", [{ text: "OK" }]);
    }
  };
  const calculate = () => {
    try {
      let lastArr = currentNumber[currentNumber.length - 1];

      if (
        lastArr === "/" ||
        lastArr === "*" ||
        lastArr === "-" ||
        lastArr === "+" ||
        lastArr === "%" ||
        lastArr === "="
      ) {
        return;
      } else {
        if (!currentNumber) return;
        let result = eval(currentNumber).toString();
        setLastNumber(currentNumber + "=");
        setCurrentNumber(result);
        return;
      }
    } catch (error) {
      Alert.alert("Failed", "Invalid Arguments", [{ text: "OK" }]);
    }
  };

  return (
    <Layout>
      <ScrollView>
        <Box flex={1}>
          <Box flex={1} style={style.Container}>
            <Box space={2} w="100%">
              <Heading
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 5,
                  fontWeight: "bold",
                }}
                size="lg"
                color="primary.600"
              >
                REACT NATIVE CALCULATOR
              </Heading>
              <View
                my={3}
                style={{
                  backgroundColor: "#ffffff",
                  padding: 15,
                  borderRadius: 5,
                  height: 120,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text color="#000" fontSize={30}>
                  {currentNumber}
                </Text>
              </View>

              <View mb={3} flexDirection="row">
                <Button
                  flex={1}
                  mr={2}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress("DEL")}
                  shadow={3}
                  style={{ width: 50, height: 60 }}
                >
                  DEL
                </Button>

                <Button
                  flex={1}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 35,
                  }}
                  onPress={() => handlePress("C")}
                  shadow={3}
                  style={{ width: 50, height: 60 }}
                >
                  C
                </Button>
              </View>

              <View mb={3} flexDirection="row">
                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(1)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  1
                </Button>

                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(2)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  2
                </Button>

                <Button
                  mr={2}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress("-")}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  -
                </Button>

                <Button
                  mr={2}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress("+")}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  +
                </Button>
              </View>

              <View mb={3} flexDirection="row">
                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(3)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  3
                </Button>

                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(4)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  4
                </Button>

                <Button
                  mr={2}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress("/")}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  /
                </Button>

                <Button
                  mr={2}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress("*")}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  *
                </Button>
              </View>
              <View mb={3} flexDirection="row">
                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(5)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  5
                </Button>

                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(6)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  6
                </Button>

                <Button
                  mr={2}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress("%")}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  %
                </Button>

                <Button
                  mr={2}
                  bg="#3F0713"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress("=")}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  =
                </Button>
              </View>
              <View mb={3} flexDirection="row">
                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(7)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  7
                </Button>

                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(8)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  8
                </Button>

                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(9)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  9
                </Button>

                <Button
                  mr={2}
                  bg="primary.400"
                  justifyContent="center"
                  _text={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handlePress(0)}
                  shadow={3}
                  style={{ width: 70, height: 70 }}
                >
                  0
                </Button>
              </View>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Layout>
  );
}
