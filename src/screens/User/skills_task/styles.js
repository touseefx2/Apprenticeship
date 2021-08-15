import {StyleSheet} from "react-native";
import GV from "./Global_Var";
import {Window}  from "../../../themes/Window/index";
 

export const styles = StyleSheet.create({
  container:{ flex: 1,backgroundColor:GV.containerBackgroundColor},

  skillProgressBox:{
     alignSelf:"center",
     marginTop:10,
     marginBottom:"2%",
     
    },
    skillProgressText:{
     fontSize:15,
     color:"#808080",     
      },
   
   skillProgress:{
     borderColor:"#e0e0e0",
     borderWidth:.5,
     backgroundColor:"#e0e0e0",
     borderRadius:10
   },
      
   skillTaskBox:
   {
      flex:1,
      marginTop:10,
      backgroundColor:"white",
      padding:5,
  },
  skillTaskCard:
  {
   width:GV.cardWidth,
   height:GV.cardHeight,
   padding:5,
   alignSelf:"center",
   backgroundColor:"white",
   shadowColor: "grey",
  shadowOffset: { width: 1, height: 4 },
  shadowRadius: 8,
  shadowOpacity: 0.4,
  elevation: 5,
 },
 taskBox:
 {
  flex:1,
  flexDirection:"row",
  padding:5,
  margin:15,
  alignSelf:"center",
  alignItems:"center",
  backgroundColor:null,
 // shadowColor:"black",
 // elevation:10
},
taskCard:
{
 flex:1,
// height:GV.cardHeight,
padding:15,
 borderRadius:10,
 marginLeft:20,
 backgroundColor:"#e8e8e8",
 
},
skillLogo: {
 width: 45,
 height: 45,
 borderRadius:22.5,
 marginLeft:5,
resizeMode:"contain",

} ,
circleProgress:{
  position:"absolute",
  right:0,
 },
 
  });
   

 