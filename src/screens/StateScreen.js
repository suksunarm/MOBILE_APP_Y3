import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const StateScreen = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <View style={styles.Button}>
        <Button
          title="Increase"
          onPress={() => {
            setValue(value + 1);
            console.log(value);
          }}
        />
        <Button
          title="Decrease"
          color={"red"}
          onPress={() => {
            setValue(value - 1);
            console.log(value);
          }}
        />
        <Button
          title="Reset"
          color={"green"}
          onPress={() => {
            setValue(0);
            console.log(value);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    width: 250,
    height: 100,
    gap: 10,
  },
});

export default StateScreen;
