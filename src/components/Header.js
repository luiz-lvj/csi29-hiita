import { View, StyleSheet, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function Header({ navigation }){
    return(
        <LinearGradient 
        onStartShouldSetResponder={() => navigation.navigate("Login")}
        colors={["#5AB98B", "#60ABA7"]} style={style.gradient}>
            <Image
            source={require('../imgs/logo.png')}
            style={style.logo}/>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    logo:{
        height: 60,
        width: 60
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
})