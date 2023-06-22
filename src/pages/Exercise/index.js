import { SafeAreaView, Text, StyleSheet, View, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../Home/components/Card";

export default function Exercises({ navigation }){

    const exercicios = [
        {"name": "Agachamento Sumô", "description": "Agachamento sumô com halteres"},
        {"name": "Bicicleta", "description": "Corrida bicicleta 20 minutos"},
        {"name": "Halteres", "description": "Halteres"}
    ]

    return(
        <SafeAreaView  style={styles.container} >
            <Header navigation={navigation} />
            
            <Text style={ styles.title } >Veja os exercícios abaixo</Text>
                
            <View style={styles.containerLine}>
                <View style={styles.line}/>
            </View>

            <ScrollView 
            style={styles.scroll}
            >
                {exercicios.map((treino, index) => 
                    (
                    <Card
                    key={index}
                    name={treino.name}
                    description={treino.description}
                    navigation={navigation}
                    />
                ))}
                
                <View
                style={styles.buttonSave}
                onStartShouldSetResponder={() => navigation.navigate('Home')}
                >
                    <Text style={styles.labelSave} >Salvar</Text>
                </View>
            </ScrollView>

            

            <Footer  navigation={navigation} />
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