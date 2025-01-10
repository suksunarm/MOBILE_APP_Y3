import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const CustomButton = ({ title, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "gold",
    padding: 10,
    alignContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "black",
    fontSize: 15,
    textAlign: "center"
  },
});

export default CustomButton;
