import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    loginButton: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E6E6E6",
        width:250,
        height:48,
        borderRadius:10,
       borderWidth:2,
       borderColor:'#2EEC8AFF'
    },
    signedScreen:
        {backgroundColor:'#E6E6E6',
        borderRadius:100,
        padding:20,
        marginTop:10
    },
    text:{
         color: 'black',
     fontWeight: '700' }
    
});

export default styles;