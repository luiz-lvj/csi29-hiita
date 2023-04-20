import { Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function Footer({ navigation }) {
    return (
        <LinearGradient colors={["#5AB98B", "#60ABA7"]} style={styles.gradient}>
            <View style={styles.iconContainer} >
                <Icon
                color="#FFFFFF"
                name="home"
                onPress={() => navigation.navigate("Home")}
                size={40}
                type="feather"
                />
            </View>

            <View style={styles.iconContainer} >
                <Icon
                color="#FFFFFF"
                name="person-outline"
                onPress={() => navigation.navigate("Home")}
                size={40}
                type="ionicons"
                />
            </View>

            <View style={styles.iconContainer} >
                <Icon
                color="#FFFFFF"
                name="logout"
                onPress={() => navigation.navigate("Login")}
                size={40}
                type="materialicons"
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25

    },

    iconContainer:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '33.33%',
        height: '100%',
        alignContent: 'center'
    }
});

