import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, Text, StyleSheet, Image, View, TextInput } from 'react-native';


export default function Login({ navigation }){

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return(
        <SafeAreaView style={homeStyle.container} >
            <LinearGradient colors={["#5AB98B", "#60ABA7"]} style={homeStyle.gradient}>
                <Image source={require('../imgs/logo.png')} style={homeStyle.logoImg} />

                <View style={homeStyle.forms}>
                    <Text style={homeStyle.labelInput} >username</Text>
                    <TextInput style={homeStyle.input}
                    placeholder='usuário'
                    text={userName}
                    onChangeText={setUserName}
                    ></TextInput>
                    <Text style={homeStyle.labelInput} >senha</Text>
                    <TextInput style={homeStyle.input}
                    placeholder='senha'
                    ></TextInput>
                </View>

                <View 
                style={homeStyle.containerLogin}
                >
                    <View 
                    style={homeStyle.buttonLogin}
                    onStartShouldSetResponder={() => navigation.navigate('Home') }
                    >
                        <Text style={homeStyle.textLogin} 
                        >login</Text>
                    </View>

                    <Text style={homeStyle.labelInput}>sign up</Text>

                </View>

                
            </LinearGradient>

        </SafeAreaView>
    );
}

const homeStyle = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        flexDirection: 'column',
    },
    gradient:{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#B4CFD4',
        paddingBottom: '25%',
    },
    logoImg:{
        marginTop: '2%',
        height: '45%',
        width: '45%',
        marginBottom: '5%'
    },

    forms:{
        width: "100%",
        display: "flex",
        paddingLeft: '6%',
        paddingRight: '6%',

    },
    labelInput:{
        color: "#FFFFFF",
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        width: '100%',
        height: '20%',
        //make shadow bottom white with 2px
        borderBottomWidth: 3,
        borderBottomColor: '#FFFFFF',
        fontSize: 15,
        marginBottom: '1%',
        borderRadius: 5,
        
    },
    containerLogin:{
        display: "flex",
        width: "100%",
        paddingLeft: "6%",
        paddingRight: "6%",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: '10%',
        marginBottom: "10%"
    },
    buttonLogin:{
        display: "flex",
        width: "100%",
        backgroundColor: "#FFFFFF",
        height: 40,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        borderRadius: 9,
        alignItems: "center",
        marginBottom: 10
    },

    textLogin:{
        color: "#60ACA7",
        fontWeight: "bold",
        fontSize: 20
    },

    

    button:{
        marginBottom: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: '#AA83BA',
        flexDirection: 'row',
        width: '75%',
        height: '10%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        borderColor: '#724983'
    },

})