import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const SwipeScreen = () => {
  const [ListData, setListData] = useState([
    { id: "1", text: "รายการที่ 1" },
    { id: "2", text: "รายการที่ 2" },
    { id: "3", text: "รายการที่ 3" },
    { id: "4", text: "รายการที่ 4" },
    { id: "5", text: "รายการที่ 5" },
  ]);

  /*const renderRight = () => {
    <TouchableOpacity style={styles.ActionButton}>
      <Text>ลบบบบบ</Text>
    </TouchableOpacity>;
  };*/

  const deleteItem = (id) => {
    const newList = ListData.filter((item) => item.id != id);
    setListData(newList);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>This is Kawamura from Japan</Text>
      <SwipeListView
        data={ListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.ListItem}>
            <Text style={styles.ListItemText}>{item.text}</Text>
          </View>
        )}
        renderHiddenItem={({item}) => (
          <TouchableOpacity 
          style={styles.ActionButton} 
          onPress={() => deleteItem(item.id)}>
            <Text style={styles.ActionText}>Delete {item.id}</Text>
          </TouchableOpacity>
        )}
        rightOpenValue={-120}  //ความกว้างของการเลื่อนด้านขวาไปด้านซ้ายได้เท่าไหร่
        disableRightSwipe={true} //สไลด์ขวาได้อย่างเดียว
        onSwipeValueChange={(swipeData) => {
            const { key , value } = swipeData;
            value <= -300 ? deleteItem(key) :null;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  ListItem: {
    backgroundColor: "white",
    padding: 20,
    width: 370,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },

  ListItemText: {
    fontSize: 18,
  },

  ActionButton: {
    backgroundColor: '#ff5252',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    paddingHorizontal: 20,
  },

  ActionText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
});

export default SwipeScreen;


