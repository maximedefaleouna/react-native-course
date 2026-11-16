import { View, Text, StyleSheet, Modal, Button } from "react-native";
import FlexBox from "./FlexBox";
import { useState } from "react";

export default function StyleSheets({ onClose }) {
  const [isFlexModalVisible, setIsFlexModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Styles et Ombres React Native</Text>
      
      <View style={styles.box}>
        <Text style={styles.boxText}>Boite Standard avec Bordure Pointillee</Text>
      </View>

      <View style={[styles.box, styles.boxShadow, styles.androidShadow]}>
        <Text style={styles.boxText}>Boite avec Ombre (iOS & Android)</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Ouvrir Demonstration Flexbox"
          color="#2e7d32"
          onPress={() => setIsFlexModalVisible(true)}
        />
      </View>

      {onClose && (
        <View style={styles.buttonWrapper}>
          <Button title="Fermer" color="midnightblue" onPress={onClose} />
        </View>
      )}

      <Modal
        visible={isFlexModalVisible}
        onRequestClose={() => setIsFlexModalVisible(false)}
        animationType="slide"
      >
        <FlexBox onClose={() => setIsFlexModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#222222",
  },
  boxText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
    textAlign: "center",
  },
  box: {
    width: "100%",
    height: 100,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#1976d2",
    borderStyle: "dashed",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 12,
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  androidShadow: {
    elevation: 8,
  },
  buttonWrapper: {
    marginVertical: 8,
  },
});
