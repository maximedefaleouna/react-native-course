import {
  Alert,
  ActivityIndicator,
  View,
  Button,
  Text,
  Modal,
  StyleSheet,
} from "react-native";
import Greet from "./Greet";

export default function CustomModal({ isVisible, onClose }) {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <ActivityIndicator size="large" color="#0066cc" animating={true} />
        <Greet name="Maxime" />
        <Text style={styles.modalTitle}>Demonstration de Modal React Native</Text>
        <Text style={styles.modalDescription}>
          Ce composant illustre les fenetres modales natives, la gestion des indicateurs d'activite et les dialogues d'alerte.
        </Text>

        <View style={styles.buttonGroup}>
          <Button
            title="Declencher Alerte"
            color="#0066cc"
            onPress={() =>
              Alert.alert(
                "Alerte Systeme",
                "Ceci est une boite de dialogue native declenchee via Alert.alert().",
                [
                  {
                    text: "Annuler",
                    style: "cancel",
                    onPress: () => console.log("Action annulee"),
                  },
                  {
                    text: "Confirmer",
                    onPress: () => console.log("Action confirmee"),
                  },
                ]
              )
            }
          />
          <View style={styles.spacer} />
          <Button
            title="Fermer la Modal"
            color="midnightblue"
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#e6f2ff",
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#003366",
  },
  modalDescription: {
    fontSize: 14,
    color: "#333333",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  buttonGroup: {
    flexDirection: "column",
    gap: 12,
    width: "100%",
    maxWidth: 240,
  },
  spacer: {
    height: 8,
  },
});
