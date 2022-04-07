import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

function Layout(props) {
  const { children } = props;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical:
          Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#fda4af",
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export default Layout;
