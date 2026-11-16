import { View, Text, StyleSheet } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bienvenue, <Text style={styles.highlight}>{name}</Text> !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#222222",
  },
  highlight: {
    fontWeight: "bold",
    color: "#0066cc",
  },
});
