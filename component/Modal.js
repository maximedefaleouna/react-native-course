import {
  Alert,
  ActivityIndicator,
  View,
  Button,
  Text,
  Modal,
} from "react-native";
import Greet from "./Greet";

export default function Modal1({ isModal1Visible, setIsmodal1Visible }) {
  return (
    <Modal
      visible={isModal1Visible}
      onRequestClose={() => setIsmodal1Visible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View
        style={{
          backgroundColor: "lightblue",
          flex: 1,
          padding: 60,
          paddingRight: 2,
        }}
      >
        <ActivityIndicator size={"large"} color={"red"} animating={!true} />
        <Greet name="Maxime" />
        <Text>Modal content</Text>
        <View
          style={{
            paddingRight: 200,
            paddingTop: 50,
            display: "flex",
            flexDirection: "row",
            gap: 25,
          }}
        >
          <View>
            <Button
              title="alert"
              onPress={() =>
                Alert.alert("invalid action", "fonctionnement de alert", [
                  {
                    text: "cancel",
                    onPress: () => console.log("cancel alert dialogue"),
                  },
                  {
                    text: "OK",
                    onPress: () => console.log("ok to alert dialogue msg"),
                  },
                  // {
                  //   text: "OKK",
                  //   onPress: () => console.log("okk to alert dialogue msg"),
                  // },
                  // {
                  //   text: "OKKK",
                  //   onPress: () => console.log("okkk to alert dialogue msg"),
                  // },
                ])
              }
            />
          </View>
          <View>
            <Button
              title="close"
              color={"midnightblue"}
              onPress={() => setIsmodal1Visible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
