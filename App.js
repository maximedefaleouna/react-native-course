import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  StatusBar,
  Modal,
  StyleSheet,
} from "react-native";

const adaptiveIcon = require("./assets/adaptive-icon.png");
import CustomModal from "./component/Modal";
import StyleSheets from "./component/Style";

export default function App() {
  const [isModal1Visible, setIsModal1Visible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor="#1a1a1a" barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Cours Pratique React Native</Text>
          <Text style={styles.subtitle}>
            Initiation aux Core Components et a la mise en page native
          </Text>
        </View>

        {/* Section Image et ImageBackground */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Images et Arriere-plans</Text>
          <View style={styles.imageWrapper}>
            <Image source={adaptiveIcon} style={styles.image} resizeMode="contain" />
          </View>
          <ImageBackground
            source={adaptiveIcon}
            style={styles.imageBackground}
            imageStyle={{ opacity: 0.2 }}
          >
            <Text style={styles.backgroundText}>
              Composant ImageBackground avec opacite reduite
            </Text>
          </ImageBackground>
        </View>

        {/* Section Boutons et Interactions */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Interactions et Boutons</Text>
          
          <Button
            title="Bouton Standard React Native"
            color="#0066cc"
            onPress={() => console.log("Clic sur bouton standard")}
          />

          <View style={styles.spacer} />

          <Pressable
            style={({ pressed }) => [
              styles.pressableButton,
              { backgroundColor: pressed ? "#004080" : "#0055b3" },
            ]}
            onPress={() => setIsModal1Visible(true)}
          >
            <Text style={styles.pressableText}>Ouvrir Modal 1 (Alertes & Loader)</Text>
          </Pressable>

          <View style={styles.spacer} />

          <Pressable
            style={({ pressed }) => [
              styles.pressableButton,
              { backgroundColor: pressed ? "#2e6930" : "#388e3c" },
            ]}
            onPress={() => setIsModal2Visible(true)}
          >
            <Text style={styles.pressableText}>Ouvrir Modal 2 (Styles & Flexbox)</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Modales */}
      <CustomModal
        isVisible={isModal1Visible}
        onClose={() => setIsModal1Visible(false)}
      />

      <Modal
        visible={isModal2Visible}
        onRequestClose={() => setIsModal2Visible(false)}
        animationType="slide"
      >
        <StyleSheets onClose={() => setIsModal2Visible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
  },
  imageWrapper: {
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  imageBackground: {
    padding: 20,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 10,
    alignItems: "center",
  },
  backgroundText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222222",
  },
  spacer: {
    height: 12,
  },
  pressableButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  pressableText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});
