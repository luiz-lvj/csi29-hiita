import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../components/stylesLogin";
import { Icon } from "@rneui/themed";


export default function Signup({ navigation }){

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');


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
                    <Text style={styles.labelInput} >age</Text>
                    <TextInput style={styles.inputSignup}
                    placeholder='idade'
                    text={age}
                    onChangeText={setAge}
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
                    onStartShouldSetResponder={() => navigation.navigate('Home') }
                    >
                        <Text style={styles.textLogin}
                        >Signup</Text>
                    </View>
                </View>





            </LinearGradient>

        </SafeAreaView>
    );
}