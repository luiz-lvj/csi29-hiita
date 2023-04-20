import { SafeAreaView, Text, StyleSheet, View, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./components/Card";

export default function Home({ navigation }){

    const treinos = [
        {"name": "Treino 1", "description": "Treino de peito e costas"},
        {"name": "Treino 2", "description": "Treino de pernas e biceps"},
        {"name": "Treino 3", "description": "Treino de triceps e ombros"},
        {"name": "Treino 4", "description": "Treino de Corrida"},
        {"name": "Treino 5", "description": "Treino de Aeróbico"},
    ]

    return(
        <SafeAreaView  style={styles.container} >
            <Header navigation={navigation} />
            
            <Text style={ styles.title } >Seja bem vindo, Luiz</Text>
                
            <View style={styles.containerLine}>
                <View style={styles.line}/>
            </View>

            <Text>Seus treinos</Text>
            <ScrollView 
            style={styles.scroll}
            >
                {treinos.map((treino, index) => 
                    (
                    <Card
                    key={index}
                    name={treino.name}
                    description={treino.description}
                    navigation={navigation}
                    />
                ))}
                

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
        marginBottom: 95
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
    }
})