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
} from "react-native";
const image = require("./assets/adaptive-icon.png");
import Modal1 from "./component/Modal";
import StyleSheets from "./component/Style";

export default function App() {
  const [isModal1Visible, setIsmodal1Visible] = useState(false);
  const [isModal2Visible, setIsmodal2Visible] = useState(false);

  return (
    <View
      style={{ backgroundColor: "plum", flex: 1, padding: 60, paddingRight: 2 }}
    >
      <StatusBar backgroundColor="black" barStyle={"light-content"} />
      <ScrollView>
        <Text>
          <Text style={{ color: "white" }}>Hello</Text> word
        </Text>
        <Image source={image} style={{ width: 200, height: 200 }} />
        {/* <Image source={{ uri: "http://192.168.1.64:3000/planix512.png" }} /> */}
        <View style={{ padding: 60 }}>
          <ImageBackground source={image} style={{ flex: 1 }}>
            <Text>Image en background</Text>
          </ImageBackground>
        </View>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae harum
          fugiat nisi voluptatibus eius ducimus tenetur amet culpa dolor
          necessitatibus placeat molestiae similique sapiente deserunt velit
          veritatis, est molestias reprehenderit?
        </Text>
        <Text style={{ paddingTop: 80 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae harum
          fugiat nisi voluptatibus eius ducimus tenetur amet culpa dolor
          necessitatibus placeat molestiae similique sapiente deserunt velit
          veritatis, est molestias reprehenderit?
        </Text>
        <Image
          source={image}
          style={{ width: 200, height: 200, marginTop: 50 }}
        />
        <View style={{ marginRight: 15 }}>
          <Button
            title="press"
            onPress={() => console.log("bonjour le monde")}
            color={"midnightblue"}
            disabled={false}
          />
        </View>
        <Pressable
          onPressIn={() => console.log("Texte cliqué onPressIn")}
          onPress={() => {
            console.log("Texte cliqué onPress");
            setIsmodal1Visible(true);
          }}
          onPressOut={() => console.log("Texte cliqué onPressOut")}
          onLongPress={() => console.log("Texte cliqué onLongPress")}
        >
          <View
            style={{
              padding: 10,
              margin: 5,
              backgroundColor: "#fff",
              width: 150,
              borderRadius: 15,
            }}
          >
            <Text>custom open modal</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            setIsmodal2Visible(true);
          }}
        >
          <View
            style={{
              padding: 10,
              margin: 5,
              backgroundColor: "#fff",
              width: 150,
              borderRadius: 15,
            }}
          >
            <Text>styles modal</Text>
          </View>
        </Pressable>
      </ScrollView>

      <Modal1
        isModal1Visible={isModal1Visible}
        setIsmodal1Visible={setIsmodal1Visible}
      />
      <Modal
        visible={isModal2Visible}
        onRequestClose={() => setIsmodal2Visible(false)}
      >
        <StyleSheets isModal2Visible={setIsmodal2Visible} />
      </Modal>
    </View>
  );
}

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello word</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
