
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Checkbox } from "react-native-paper";

export default function Card({ navigation, name,  description }){
    const [checked, setChecked] = useState(false);
    //get path navigation
    const route = useRoute();
    const path = route.name;

    return(
        <View 
        onStartShouldSetResponder={() => navigation.navigate("Exercises")}
        style={styles.container} >
            <View style={styles.line}>
                <Text style={styles.name} >{name}</Text>
                {path ==="Exercises" &&
                <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
                />}
            </View>
            <Text style={styles.description} >{description}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        width: "100%",
        backgroundColor: "#FFFFFF",
        height: 120,
        borderRadius: 20,
        padding: 15,
        //add shadow
        borderBottomWidth: 3,
        borderBottomColor: '#000000',
        marginBottom: 10
        
    },
    line:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3

    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#5AB98B",
    }
});