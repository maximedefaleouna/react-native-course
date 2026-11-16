import { View, StyleSheet, Button } from "react-native";
import Box from "./Box";

export default function FlexBox({ onClose }) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Box style={{ backgroundColor: "#8e9b00" }}>Boite 1</Box>
        <Box style={{ backgroundColor: "#b65d1f" }}>Boite 2</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Boite 3</Box>
        <Box style={{ backgroundColor: "#ab9156" }}>Boite 4</Box>
        <Box style={{ backgroundColor: "#6b0803" }}>Boite 5</Box>
        <Box style={{ backgroundColor: "#2e7d32" }}>Boite 6</Box>
      </View>

      {onClose && (
        <View style={styles.closeButton}>
          <Button title="Fermer Flexbox" color="midnightblue" onPress={onClose} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    justifyContent: "center",
  },
  container: {
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 10,
    height: 380,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
  },
  closeButton: {
    marginTop: 24,
  },
});
