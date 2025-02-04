import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

const STORAGE_KEY = "@card_data";

const CardScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  useEffect(() => {
    setFilteredHeroes(
      heroes.filter((hero) =>
        hero.title.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [searchKey, heroes]);

  const addCard = async () => {
    if (!title.trim() || !content.trim() || !image.trim()) {
      Alert.alert("ข้อผิดพลาด", "กรุณากรอก Title, Content และ Image");
      return;
    }

    const newCard = { id: Date.now().toString(), title, content, image };
    const updatedHeroes = [newCard, ...heroes];

    setHeroes(updatedHeroes);
    setTitle("");
    setContent("");
    setImage("");

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHeroes));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const loadCards = async () => {
    try {
      const storedCards = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedCards) {
        setHeroes(JSON.parse(storedCards));
      }
    } catch (error) {
      console.error("Failed to load data", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Avengers</Text>

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
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="กรอกลิงก์รูปภาพของคุณ"
        value={image}
        onChangeText={setImage}
      />

      <CustomButton title="เพิ่มการ์ด" backgroundColor="gold" onPress={addCard} />

      <TextInput
        style={styles.input}
        placeholder="Search by Name"
        value={searchKey}
        onChangeText={setSearchKey}
      />

      <FlatList
        data={filteredHeroes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} content={item.content} />
        )}
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
    marginTop: 20,
  },
});

export default CardScreen;
