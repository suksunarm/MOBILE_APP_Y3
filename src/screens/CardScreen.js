import Card from "../components/Card";
import React, { useState } from "react";
import { View, Text, StyleSheet ,FlatList , TouchableOpacity , TextInput} from "react-native";
import CustomButton from "../components/CustomButton";
import Icon from 'react-native-vector-icons/MaterialIcons'

const CardScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cards, setCards] = useState("");

  const addCard = () => {
    if(!title.trim() || !content.trim()){
        alert('กรุณากรอกค่า Title และ Content')
        return;
    }

    const newCard = { id: Date.now().toString, title, content };
    setCards((preCards) => [newCard, ...preCards]);
    setTitle("");
    setContent("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ทดสอบสร้างการ์ดยูกิ</Text>

      <TextInput
        style={styles.input}
        placeholder="กรอกหัวข้อของคุณ"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="กรอกเนื้อหาของคุณ"
        value={content}
        onChangeText={setContent}
        multiline={true}
        numberOfLines={5}
      />

     

      <CustomButton
        title="เพิ่มการ์ด"
        backgroundColor="gold"
        onPress={addCard}
      />

      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // <Card title={item} content={item.content} />;
          return <Card title={item.title} content={item.content} />;
        }}
        contentContainerStyle={styles.cardList}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
  },

  cardList: {
    marginTop: 20
  },
});

export default CardScreen;
