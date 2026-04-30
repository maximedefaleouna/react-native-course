import { View, StyleSheet } from "react-native";
import Box from "./Box";

export default function FlexBox() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", alignSelf: "auto" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f", alignSelf: "auto" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56", alignSelf: "auto" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156", alignSelf: "auto" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    // flex: 1,
    height: 300,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "wrap-reverse",
  },
});
