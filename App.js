import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./src/screens/ListScreen";
import StateScreen from "./src/screens/StateScreen";
import ModalScreen from "./src/screens/ModalScreen";
import SwipeScreen from "./src/screens/SwipeScreen";
import CardScreen from "./src/screens/CardScreen";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Component" component={ComponentScreen} />

        <Stack.Screen name="List" component={ListScreen} />

        <Stack.Screen name="State" component={StateScreen} options={{title:"Learning UseState"}} />  
                                                           {/*options คือกำหนดตัว header จะทำอะไรก็ได้แต่ในที่นี้ กำหนดหัวข้อแทน */}
        <Stack.Screen name="Modal" component={ModalScreen} />

        <Stack.Screen name="Swipe" component={SwipeScreen} />

        <Stack.Screen name="Card" component={CardScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
