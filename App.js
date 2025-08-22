import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
const image = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsmodalVisible] = useState(false);
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
            setIsmodalVisible(true);
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
      </ScrollView>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsmodalVisible(false)}
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
                onPress={() => setIsmodalVisible(false)}
              />
            </View>
          </View>
        </View>
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
