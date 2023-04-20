import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function Home({ navigation }){
    return(
        <SafeAreaView  style={homeStyle.container} >
                <LinearGradient colors={["#5AB98B", "#60ABA7"]} style={homeStyle.headerGradient}>
                    <Text>Home</Text>
                    {/* <Image
                    source={require('../imgs/logo.png')}
                    style={homeStyle.logoImg}/> */}
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
    headerGradient: {
        height: 20,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '25%',

    },
    logoImg:{
        height: '45%',
        width: '45%'
    }
})