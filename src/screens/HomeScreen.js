import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.TextStyle}>This is Home Screen</Text>
      <View style={styles.Button}>
      
        <Button
          title="Warp to List Screen"
          onPress={() => navigation.navigate("List")}
        />

        <Button
          title="Warp to Swipe Screen"
          onPress={() => navigation.navigate("Swipe")}
        />

        <Button
          title="Warp Modal Screen"
          onPress={() => navigation.navigate("Modal")}
        />

        <Button
          title="Go to Component Screen"
          onPress={() => navigation.navigate("Component")}
          color="green"
        />

        

        <CustomButton
          title="เรียก List Demo"
          onPress={() => navigation.navigate("List")}
          backgroundColor="gold"
        />

        <CustomButton
          title="เรียก Card Screen"
          onPress={() => navigation.navigate("Card")}
          backgroundColor="white"
        />

        <CustomButton
          title="เรียก State Screen"
          onPress={() => navigation.navigate("State")}
          backgroundColor="gray"
        />

        <CustomButton
          title="ซ้อม useEffect"
          onPress={() => navigation.navigate("Load")}
          backgroundColor="blue"
        />

        <CustomButton
          title="เรียก RegisForm"
          onPress={() => navigation.navigate("Regis")}
          backgroundColor="gold"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextStyle: {
    fontSize: 30,
  },
  Button: {
    padding: 15,
    alignContent: "center",
    borderRadius: 5,
    gap: 8,
  },
});

export default HomeScreen;
