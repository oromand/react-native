import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "flex-start",
    },
    input: {
        margin: 5, 
        padding: 10,
        backgroundColor: "#eeeeee"
    },
    inputMultiLines: {
        margin: 5, 
        padding: 10,
        backgroundColor: "#eeeeee",
        textAlignVertical: "top",
    },
    text: {
      color: "white",
      backgroundColor: "red",
      fontSize:30,
       alignContent: "flex-start",
    //   alignItems: "stretch",
    },
    
    item: {
        margin: 1,
        // minHeight: 30,
        color: "black",
        backgroundColor: "white"
    },

    movieView: {
        backgroundColor: "white",
        height: 120,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
  
  })

  export default style