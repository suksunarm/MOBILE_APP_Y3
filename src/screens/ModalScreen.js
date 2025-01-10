import React, {useState} from "react";
import {View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ModalScreen = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>This is Modal Screen</Text>
            <TouchableOpacity 
            style={styles.OkButton}
            onPress={() => setIsVisible(true)}
            >
                <Text style={styles.OkButtonText}>Open Modal</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType="fade" visible={isVisible}>  
                <View style={styles.ModalOverlay}>
                    <View style={styles.ModalContainer}>
                        <Text style={styles.title}>Welcome Message</Text>
                        <Text style={styles.msg}>ยินดีต้อนรับ เข้าสู่ต่างโลก Isekai</Text>
                        <TouchableOpacity style={styles.OkButton}
                        onPress={() => {
                            setIsVisible(false)
                            navigation.navigate("List");
                        }}
                        >
                            {/*<Text style={styles.OkButtonText}>คลิ้กเพื่อเข้าสู่ Isekai!!!</Text>*/}
                            <Icon name="door-open" size={36} color="white"></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    ModalOverlay:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    },

    ModalContainer:{
        width: 300,
        backgroundColor: '#E7FBB4',
        borderRadius: 10,
        padding:20,
        alignItems: 'center',
        elevation: 20   //เงาด้านหลัง
    },

    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    msg:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },

    OkButton:{
        backgroundColor: '#DF6D2D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    OkButtonText:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
    
});

export default ModalScreen;