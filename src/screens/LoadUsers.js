import React, { useState,useEffect } from "react";
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
const LoadUsers = ({navigation}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        console.log('Loading Data..');
        const fetchData = async () => {
            try {
                // Load or fetch Data
                const response = await fetch('https://jsonplaceholder.typicode.com/users')// await เป็นการรอให้ข้อมูลมาครบก่อน
                const data = await response.json();
                setUsers(data); // ยัดข้อมูลใส่ array
                console.log(data);
            } catch {
                //ถ้าโหลดข้อมูลมาไม่ได้ให้ Show error
                console.log("Error: ", error)
            } finally {
                setLoading(false); // เมื่อ load เสร็จแล้วให้ไม่ต้องขึ้นว่าหมุนแล้ว
            }
        }
        fetchData()
    }, [])
    return (
        <View style={styles.container}>
            {loading?( // ขึ้นว่าโหลดข้อมูลอยู่
                <ActivityIndicator size='large' color='#0000ff'/>
            ):(
                <FlatList 
                    data={users}
                    keyExtractor={(item) => item.id} 
                    renderItem={({item}) => {
                        return (                                              
                            <Text style ={styles.text}>
                                {item.name} [{item.email}]
                            </Text>
                        );
                    }} 
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 15,
        marginBottom: 8,
    },
});
export default LoadUsers;