import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/CustomButton";

const RegisForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChage = (field, value) => {
    switch (field) {
      case "username":
        setUsername(value);
        setErrors((preErrors) => ({ ...preErrors, username: "" }));
        break;
      default:
        break;
    }
  };
  const validateField = (field, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else {
      if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
        //ตรวจว่าเป็นรูปแบบอีเมลที่ถูกต้องไหม
        error = "Invalid email address";
      } else if (field === "password" && value.length < 8) {
        error = "Invalid password format";
      } else if (field === "confirmpassword" && value.length < 8) {
        error = "Invalid password format";
      } else if (
        field === "password" &&
        field === "confirmpassword" &&
        !(password === confirmpassword)
      ) {
      }
    }
    setErrors((preErrors) => ({ ...preErrors, [field]: error }));
    return error;
  };

  const checkSubmit = () => {
    const usernameError = validateField("username", username);
    const emailError = validateField("email", email);
    const passwordError = validateField("password", password);
    const confirmpasswordError = validateField(
      "confirmpassword",
      confirmpassword
    );

    if (!usernameError && !emailError && !passwordError && !confirmpasswordError && password === confirmpassword
    ) {
      Alert.alert("Registration result: ", "SUCCESS!!!", [
        {
          text: "ยืนยัน",
          onPress: () => navigation.navigate("Card")
        },
      ]);
      setUsername("");
      setEmail("");
      setPassword("");
      setconfirmpassword("");
      setErrors({ username: "", email: "", password: "", confirmpassword: "" });
      navigation.navigate("Card");
    } else if (!(password === confirmpassword)) {
      setUsername(username);
      setEmail(email);
      setPassword(password);
      setconfirmpassword(confirmpassword);
      setErrors({
        username: "",
        email: "",
        password: "",
        confirmpassword: "รหัสผ่านไม่ตรงกัน",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(value) => setUsername(value)}
        //onChangeText={(value) => handleChage("username", value)}
        onBlur={() => validateField("username", username)}
      />

      {errors.username ? (
        <Text style={styles.errorText}>{errors.username}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => setEmail(value)}
        onBlur={() => validateField("email", email)}
      />

      {errors.email ? (
        <Text style={styles.errorText}>{errors.email}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
        onBlur={() => validateField("password", password)}
      />

      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        value={confirmpassword}
        onChangeText={(value) => setconfirmpassword(value)}
        onBlur={() => validateField("confirmpassword", confirmpassword)}
      />

      {errors.confirmpassword ? (
        <Text style={styles.errorText}>{errors.confirmpassword}</Text>
      ) : null}

      <CustomButton
        title="Register"
        backgroundColor="gold"
        onPress={checkSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 12,
  },

  errorText: {
    color: "red",
    marginBottom: 8,
  },
});

export default RegisForm;
