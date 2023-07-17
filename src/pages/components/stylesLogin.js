import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

    logoImgSignup:{
        marginTop: '-14%',
        height: '35%',
        width: '35%'
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
        height: '16%',
        //make shadow bottom white with 2px
        borderBottomWidth: 3,
        borderBottomColor: '#FFFFFF',
        fontSize: 15,
        marginBottom: '1%',
        borderRadius: 5,
        
    },
    inputSignup:{
        width: '100%',
        height: '15%',
        borderBottomWidth: 3,
        borderBottomColor: '#FFFFFF',
        fontSize: 15,
        borderRadius: 5

    },
    containerLogin:{
        display: "flex",
        width: "100%",
        paddingLeft: "6%",
        paddingRight: "6%",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: '20%',
        marginBottom: "20%"
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
    arrowBack:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: "100%",
        alignContent: 'flex-start',
        marginTop: "1%",
        marginLeft: "1%"
    }

})