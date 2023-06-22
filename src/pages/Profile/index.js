import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Profile({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />

            <Text style={ styles.title } >Perfil</Text>
            <View style={styles.containerData}>
                <Text style={styles.textLine} >
                    CPF: 123.456.789-10
                </Text>
                <Text style={styles.textLine} >
                    Nome: Luiz
                </Text>
                <Text style={styles.textLine} >
                    E-mail: luiz@teste.com
                </Text>
            </View>
            

            <Footer navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#D9D9D9",
        height: 500

    },
    scroll: {
        width: '100%',
        height: '100%',
        backgroundColor: "#D9D9D9",
        paddingTop: 10,
        paddingLeft: "6%",
        paddingRight: "6%",
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#5AB98B",
        textAlign: 'center',
        marginTop: 80,
    },
    line:{
        width: '70%',
        height: 3,
        backgroundColor: "#5AB98B",
        alignItems: "center"
    },
    containerLine:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 5,
        marginBottom: 5
    },
    containerData:{
        width: '100%',
        paddingLeft: "15%",
        paddingRight: "15%",
        marginTop: 10
    },
    textLine:{
        fontSize: 16,
        textAlign: 'left',

    },
    buttonSave:{
        display: "flex",
        width: "100%",
        backgroundColor: "#5AB98B",
        height: 50,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        borderRadius: 9,
        alignItems: "center", 
        marginBottom: 30
    },
    labelSave:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20
    }
})