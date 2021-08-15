import {StyleSheet} from "react-native";
import GV from "./Global_Var";
 
export const styles = StyleSheet.create({
  container:{ flex: 1,backgroundColor:GV.containerBackgroundColor},
  skillBox:
  {
     flex:1,
     backgroundColor:"white",
 },
 skillCard:
 {
 
  width:GV.cardWidth,
  height:GV.cardHeight,
  padding:5,
  alignSelf:"center",
  backgroundColor:"white",
  shadowColor: "grey",
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 10,
  shadowOpacity: 0.4,
  elevation: 5,
},
 
skillLogo: {
 width: 40,
 height: 40,
resizeMode:"contain",

} ,
  
     skillProgress:{
      marginTop:8,
      marginLeft:10
     },
  });
   

 