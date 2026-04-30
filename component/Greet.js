import { View, Text } from "react-native";

export default function Greet({ name }) {
  return (
    <View>
      <Text>
        salut user <Text style={{ color: "white" }}>{name}</Text>
      </Text>
    </View>
  );
}
