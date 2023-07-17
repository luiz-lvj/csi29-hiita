import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, Text, StyleSheet, Image, View, TextInput, Alert } from 'react-native';
import { styles } from '../components/stylesLogin';


export default function Login({ navigation, userType, setUserType }){

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    console.log(userType)

    async function handleLoginStudent(){
        // if(userName != "Luiz" || userPassword != "123"){
        //     Alert.alert("Erro", "Usuário ou senha inválidos");
        //     return;
        // }
        setUserType('student');
        navigation.navigate('Home');
    }

    async function handleLoginTeacher(){

        setUserType('teacher');
        navigation.navigate('Home');
    }


    return(
        <SafeAreaView style={styles.container} >
            <LinearGradient colors={["#5AB98B", "#60ABA7"]} style={styles.gradient}>

                <Image 
                source={require('../../imgs/logo.png')} style={styles.logoImg} />
                

                <View style={styles.forms}>
                    <Text style={styles.labelInput} >username</Text>
                    <TextInput style={styles.input}
                    placeholder='usuário'
                    text={userName}
                    onChangeText={setUserName}
                    ></TextInput>
                    <Text style={styles.labelInput} >senha</Text>
                    <TextInput style={styles.input}
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
                    onStartShouldSetResponder={handleLoginStudent}
                    >
                        <Text style={styles.textLogin} 
                        >login Aluno</Text>
                    </View>

                    <View 
                    style={styles.buttonLogin}
                    onStartShouldSetResponder={handleLoginTeacher}
                    >
                        <Text style={styles.textLogin} 
                        >login Treinador</Text>
                    </View>

                    <View
                    onStartShouldSetResponder={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.labelInput} >sign up</Text>   
                    </View>

                </View>

                
            </LinearGradient>

        </SafeAreaView>
    );
}
