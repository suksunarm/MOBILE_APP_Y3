import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SwipeListView } from "react-native-swipe-list-view";

const ListScreen = ({ navigation }) => {
  const friends = [
    { name: "friend 1", age: 13 },
    { name: "friend 2", age: 15 },
    { name: "friend 3", age: 17 },
    { name: "friend 4", age: 18 },
    { name: "friend 5", age: 17 },
    { name: "friend 6", age: 11 },
    { name: "friend 7", age: 14 },
    { name: "friend 8", age: 13 },
    { name: "friend 9", age: 18 },
    { name: "friend 10", age: 14 },
  ];

  const [history, sethistory] = useState([
    {id:"1" ,name: "Soba", status: "Phone", day: "Monday", image:require("../img/soba.jpg") },
    {id:"2" , name: "Rem", status: "Mobile", day: "Friday", image:require("../img/rem-profile.jpg") },
    {id:"3" , name: "Brooks", status: "Mobile", day: "Thursday", image:require("../img/ram.png") },
    {id:"4" , name: "Ethan", status: "Mobile", day: "Thursday", image:require("../img/one.png") },
    {id:"5" , name: "Hudson", status: "Phone", day: "Monday", image:require("../img/two.jpg")},
    {id:"6" , name: "Christopher", status: "Phone", day: "Tuesday", image:require("../img/three.jpg") },
    {id:"7" , name: "Miles", status: "Phone", day: "Wednesday", image:require("../img/four.jpg") },
    {id:"8" , name: "Michael", status: "Mobile", day: "Wednesday", image:require("../img/five.jpg") },
    {id:"9" , name: "Waylon", status: "Mobile", day: "Tuesday", image:require("../img/six.jpg") },
    {id:"10" , name: "Charles", status: "Mobile", day: "Sunday", image:require("../img/seven.jpg") },
  ]);

  /*const ShowAlert = (callalert, msg) => {
        Alert.alert(callalert , msg,[
        { text: "รับสาย", onPress: () => console.log("ได้รับสาย") },
        { text: "วางสาย", onPress: () => console.log("ไม่ได้รับสาย") },
      ]);
    };

  const ShowAlert = () => {};  
  */

  const [isVisible, setIsVisible] = useState(false);
  const [NameValue, setNameValue] = useState("");
  const [ImageValue, setImageValue] = useState("");

  const deleteItem = (id) => {
    const newItem = history.filter((item) => item.id != id);
    sethistory(newItem);
  };

  return (
    /*<Modal visible={isVisible}>*/ <View style={styles.ViewStyle}>
      {/*
            <Text style={styles.TextStyle}>A List of Screen</Text>
            <FlatList
            keyExtractor={friend => friend.name} 
            data={friends} 
            renderItem={({item}) => {
                return <Text style={styles.TextStyle}>{item.name}-{item.age}</Text>;
                }} 
                />
            */}
      <View style={styles.ContainerStyle}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.Navbar}>Clear</Text>
          <Text style={styles.Navbar}>Done</Text>
        </View>
      </View>
      <Text style={styles.TitleStyle}>Recents</Text>
      <SwipeListView
        data={history}
        keyExtractor={(item) => 
          item.id.toString()
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.historyItem}>
              <TouchableOpacity
                onPress={() => {
                  /*setIsVisible(false);
                navigation.navigate("Modal");
                */
                  setIsVisible(true);
                  setNameValue(item);
                  setImageValue(item);
                }}
              >
                <View style={styles.record}>
                  <View style={{ flexDirection: "column" }}>
                    <View
                      style={{
                        flexDirection: "row",
                        position: "relative",
                        top: 25,
                      }}
                    >
                      <Text style={[styles.TextStyle, { flex: 1 }]}>
                        {item.name + " "}
                      </Text>
                      <View style={styles.Dayposition}>
                        <Text style={[styles.TextDetails, { flex: 0 }]}>
                          {item.day}
                        </Text>
                      </View>
                    </View>

                    <Image
                      style={styles.ImageStyle}
                      source={item.image}
                    />

                    <View
                      style={{ position: "relative", left: 70, bottom: 45 }}
                    >
                      <Text style={styles.TextDetails}>
                        {item.status + " "}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <Modal transparent={true} visible={isVisible}>
                <View style={styles.ModalOverlay}>
                  <View style={styles.ModalContainer}>
                    <Text style={styles.title}>Calling</Text>
                    <Image
                      style={{position: "relative",
                        bottom:10,
                        borderRadius: 75,
                        width: 50,
                        height: 50,
                        borderWidth: 1,
                        borderColor: "white",
                        resizeMode: "cover",}}
                      source={ImageValue.image}
                    />

                    <Text style={styles.msg}>{NameValue.name}</Text>
                    <TouchableOpacity
                      style={styles.OkButton}
                      onPress={() => {
                        setIsVisible(false);
                        navigation.navigate("List");
                      }}
                    >
                      <Icon name="call-end" size={36} color="white"></Icon>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          );
        }}
        renderHiddenItem={({ item }) => (
          <TouchableOpacity
            style={styles.ActionButton}
            onPress={() => deleteItem(item.id)}
          >
            <Text style={styles.ActionText}>Delete {item.name}</Text>
          </TouchableOpacity>
        )}
        rightOpenValue={-170} //ความกว้างของการเลื่อนด้านขวาไปด้านซ้ายได้เท่าไหร่
        disableRightSwipe={true} //สไลด์ขวาได้อย่างเดียว
        onSwipeValueChange={(swipeData) => {
          const {key , value} = swipeData; 
          value <= -300 ? deleteItem(key) :null;
        }}
      />
    </View> /*</Modal>*/
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    backgroundColor: "black",
  },

  TextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: "70",
    marginBottom: 20,
  },

  TextDetails: {
    color: "#9e9e9e",
    fontSize: 14,
  },

  Dayposition: {
    marginTop: 15,
    paddingRight: 10,
  },

  TitleStyle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },

  ContainerStyle: {
    width: "100%",
    height: 60,
    backgroundColor: "black",
    justifyContent: "center",
  },

  Navbar: {
    color: "#5677fc",
    fontSize: 20,
    margin: 10,
  },

  /*record: {
    borderBlockColor: "white",
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },
*/
  ImageStyle: {
    position: "relative",
    bottom: 25,
    left: 10,
    borderRadius: 75,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    resizeMode: "cover",
  },

  ModalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  ModalContainer: {
    width: 300,
    backgroundColor: "#E7FBB4",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 20, //เงาด้านหลัง
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  msg: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  OkButton: {
    backgroundColor: "#DF6D2D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  OkButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  ActionButton: {
    backgroundColor: "#ff5252",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "90",
    paddingHorizontal: 20,
  },

  ActionText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  historyItem: {
    backgroundColor: "black",
    width: "100%",
    height: 90,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 5,
    borderBlockColor: "white",
    borderWidth: 0.5,
  },
});

export default ListScreen;
