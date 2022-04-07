import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const responsiveWidth = (w) => {
  return width * (w / 100);
};

export const responsiveHeight = (h) => {
  return height * (h / 100);
};
