import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../components/stylesLogin";
import { Icon } from "@rneui/themed";
import {BASE_API} from "@env";
import axios from "axios";


export default function Signup({ navigation }){

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [cpf, setCpf] = useState(0);
    const [email, setEmail] = useState('');


    function handleRegister(){
        navigation.navigate('Login');
        return

        if(userName == "" || userPassword == "" || cpf == 0 || email == ""){
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }
        const body = {
            "name": userName,
            "password": userPassword,
            "username": cpf,
            "email": email
        }
        const url = `${BASE_API}/HIITA/register`;
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
        })
        .then((response) => {
            Alert("Sucesso", "Usuário cadastrado com sucesso");
            console.log(response)
            navigation.navigate('Login');
        })
        .catch((error) => {
            console.log(error)
            Alert.alert("Erro", "Erro ao cadastrar usuário");
        });
    }


    return(
        <SafeAreaView style={styles.container} >
            <LinearGradient colors={["#5AB98B", "#60ABA7"]} style={styles.gradient}>
                <View style={styles.arrowBack}
                onStartShouldSetResponder={() => navigation.navigate('Login')}
                >
                
                    <Icon
                    color="#FFFFFF"
                    name="arrow-left"
                    onLongPress={() => console.log("onLongPress()")}
                    onPress={() => navigation.navigate('Login')}
                    size={40}
                    type="evilicon"
                    
                    />
                </View>
  
                <Image 
                source={require('../../imgs/logo.png')} style={styles.logoImgSignup} />
                <View style={styles.forms}>
                    <Text style={styles.labelInput} >CPF</Text>
                    <TextInput style={styles.inputSignup}
                    placeholder='CPF'
                    text={cpf}
                    onChangeText={setCpf}
                    ></TextInput>
                    <Text style={styles.labelInput} >Name</Text>
                    <TextInput style={styles.inputSignup}
                    placeholder='nome'
                    text={userName}
                    onChangeText={setUserName}
                    ></TextInput>
                    <Text style={styles.labelInput} >email</Text>
                    <TextInput style={styles.inputSignup}
                    placeholder='email'
                    text={email}
                    onChangeText={setEmail}
                    ></TextInput>
                    <Text style={styles.labelInput} >password</Text>
                    <TextInput style={styles.inputSignup}
                    placeholder='senha'
                    text={userPassword}
                    
                    onChangeText={setUserPassword}
                    ></TextInput>
                </View>

                <View
                style={styles.containerLogin}
                >
                    <View
                    style={styles.buttonLogin}
                    onStartShouldSetResponder={handleRegister}
                    >
                        <Text style={styles.textLogin}
                        >Signup</Text>
                    </View>
                </View>





            </LinearGradient>

        </SafeAreaView>
    );
}