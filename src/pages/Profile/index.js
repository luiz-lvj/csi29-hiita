import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../Home/components/Card";

export default function Profile({ navigation, userType }){

    const exercicios = [
        {"name": "Agachamento Sumô", "description": "Agachamento sumô com halteres"},
        {"name": "Bicicleta", "description": "Corrida bicicleta 20 minutos"},
        {"name": "Halteres", "description": "Halteres"}
    ]

    const students = [
        {"name": "Neymar", "last": "30-06-2023"},
        {"name": "Messi", "last": "30-06-2023"},
        {"name": "Cristiano Ronaldo", "last": "30-06-2023"}
    ]


    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />

            <Text style={ styles.title } >Perfil</Text>
            <View style={styles.containerData}>
                <Text style={styles.textLine} >
                    CPF: {userType =="student" ?   "123.456.789-12" : "123.456.789-11"}
                </Text>
                <Text style={styles.textLine} >
                    Nome: { userType == "student" ?  "Luiz" : "Professor Luiz"}
                </Text>
                <Text style={styles.textLine} >
                    E-mail: { userType =="student" ? "luiz@aluno.com" : "luiz.professor.com"}
                </Text>
            </View>

            <View style={styles.containerLine}>
                <View style={styles.line}/>
            </View>
            {userType === "student" &&
            <ScrollView
            style={styles.scroll}
            >
                <Text style={ styles.exercises } >Treinos Realizados</Text>
                {exercicios.map((treino, index) =>{
                    return(
                        <Card
                        key={index}
                        name={treino.name}
                        description={treino.description}
                        navigation={navigation}
                        />
                    );
                })}

            </ScrollView>}

            {userType === "teacher" &&
            <ScrollView
            style={styles.scroll}
            >
                <Text style={ styles.exercises } > Seus Alunos</Text>
                {students.map((student, index) =>{
                    return(
                        <Card
                        key={index}
                        name={student.name}
                        description={student.last}
                        navigation={navigation}
                        />
                    );
                })}
            </ScrollView>}


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
    exercises:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#5AB98B",
        textAlign: 'center',
        marginTop: 3,
    },
    line:{
        width: '70%',
        height: 4,
        backgroundColor: "#5AB98B",
        alignItems: "center"
    },
    containerLine:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 15
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