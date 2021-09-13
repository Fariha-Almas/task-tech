
import { Dimensions, Platform } from "react-native";
const windowWidth = Dimensions.get("window").width;

function correctSize(size) {
  return (size / 360) * windowWidth;
}
const keyboardVerticalOffset = Platform.OS === "ios" ? 0 : 0;

export {correctSize, keyboardVerticalOffset };
