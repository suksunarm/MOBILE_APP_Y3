import React, { useState ,useReducer  } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const intialState = {count : 0}

const reducer = (state , action) => {
  switch (action.type){
    case "INCREMENT":
      return { count: state.count + 1};
     case "DECREMENT":
      return { count: state.count - 1};
     case "RESET":
      return { count: state.count = 0}
       default:
        return state;
  }  
}

const StateScreen = ({ navigation }) => {
  //const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.count}</Text>
      <View style={styles.Button}>
        <Button
          title="Increase"
          onPress={
            () => dispatch({ type: "INCREMENT" })
            // setValue(value + 1);
            // console.log(value);
          }
        />
        <Button
          title="Decrease"
          color={"red"}
          onPress={  
            
              () => dispatch({ type: "DECREMENT" })
            // setValue(value - 1);
            // console.log(value);
          }
        /> 
         <Button
          title="Reset"
          color={"green"}
          onPress={
            () => dispatch({ type: "RESET" })
            // setValue(0);
            // console.log(value);
          }
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
