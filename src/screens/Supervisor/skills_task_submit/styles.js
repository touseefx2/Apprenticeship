import {StyleSheet} from "react-native";
import GV from "./Global_Var";
import {Window}  from "../../../themes/Window/index";
 

export const styles = StyleSheet.create({
  container:{ flex: 1,backgroundColor:GV.containerBackgroundColor},
  timeBox:
  {
  position:"absolute",right:0,top:5,
  flexDirection:"row",alignItems:"center",

 },
  timerCard:
   {
    borderRadius:5,
    flexDirection:"row",
    backgroundColor:null,
    alignItems:"center",
  },

documentImage: {
 width: 40,
 height: 40,
resizeMode:"contain",

} ,
photo: {
  width: 85,
  height: 85,
  shadowColor: "black",
  elevation: 2,

 } ,
textD:{
color:"black",
fontSize:14,
alignSelf:"center"
},
  
taskBox:
{
 marginLeft:9,
 marginRight:9,
} ,

     textareaContainer: {
      height: 200,
      padding: 5,
      backgroundColor:'#828282',
      borderBottomEndRadius:4,

    },
    textarea: {
      fontSize: 15,
      color: 'white',
      borderRadius:10,
    },

    button1: {width:Window.Width-40,alignItems:"center",justifyContent:"center",borderRadius:4,height:45 },
  
    button1Text:{fontWeight:"bold",fontSize:GV.button1FontSize,width:Window.Width-60}
  });
   

 