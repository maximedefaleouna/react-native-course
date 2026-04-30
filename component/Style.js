import { View, Text, StyleSheet, Modal, Button } from "react-native";
import FlexBox from "./FlexBox";
import { useState } from "react";

export default function StyleSheets() {
  const [isflexModalvisible, setIsFlexmodalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={[styles.taille, styles.couleure]}>style sheet</Text>
      <View style={styles.box}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Box</Text>
      </View>
      <View style={[styles.box, styles.boxShadow, styles.androidShadow]}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Shadow</Text>
      </View>
      <Button title="flexbox" onPress={() => setIsFlexmodalVisible(true)} />
      <Modal
        visible={isflexModalvisible}
        onRequestClose={() => setIsFlexmodalVisible(false)}
        animationType="slide"
      >
        <FlexBox />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  taille: {
    fontSize: 20,
    margin: 10,
  },
  couleure: {
    color: "red",
  },
  box: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "blue",
    borderStyle: "dashed",
    borderRadius: 15,
    paddingHorizontal: "40%",
    paddingVertical: "10%",
    marginVertical: 15,
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 60,
      height: 60,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
