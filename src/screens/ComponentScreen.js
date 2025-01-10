
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ComponentScreen = () => {
  const name = "Supphawich";
  const nickname = ["S", "T", "A", "M", "P"];
  const year = <Text style={styles.TextStyle}>2024</Text>;

  const ShowAlert = (imgalert, Sayhialert) => {
    Alert.alert(imgalert, Sayhialert, [
      { text: "Yes", onPress: () => console.log("Yes, I like") },
      { text: "No", onPress: () => console.log("No, I don't like") },
    ]);
  };

  return (
    <View style={styles.ViewStyle}>
      <TouchableOpacity
        onPress={() => ShowAlert("imgalert", "มาสิวะ อิอิ !!!!")}
      >
        img ={" "}
        <Image
          style={styles.ImageStyle}
          source={require("../img/clearnose-icon.png")}
        />
      </TouchableOpacity>

      <Text style={styles.TextStyle}>This is Component Screen</Text>
      <Text style={styles.TextStyle}>By {name}</Text>
      <Text style={styles.TextStyle}>By {nickname}</Text>
      {year}
      <Button
        title="Details"
        onPress={() => ShowAlert("Clear Nose", "Do you like Clear Nose?")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F0E68C",
  },

  TextStyle: {
    fontSize: 30,
    fontWeight: "bold",
    margin:10
  },

  ImageStyle: {
    borderRadius: 75,
    width: 350,
    height: 150,
    margin: 5,
    borderWidth: 2,
    borderColor: "black",
    resizeMode: "cover",
    marginTop:150
  },

  
});

export default ComponentScreen;
