import {StyleSheet} from "react-native";
import GV from "./Global_Var";
import {Window}  from "../../../themes/Window/index";
import GVs from '../../../store/Global_Var';

export const styles = StyleSheet.create({
  
    dp:
    {flexDirection:"row",alignItems:"center",backgroundColor:"#007069" ,borderTopLeftRadius:200,height:170,
    elevation:15,shadowColor:"black",
    shadowOffset:{width:0,height:10},
    shadowOpacity:.3,
    shadowRadius:20,
    },
    avatar: 
    {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor:"white",
    },
    name:
    {
      color: "white",
      fontWeight:"bold",
      fontSize:20,
      textTransform: 'capitalize',
    },
    textInput:
    {
    marginTop:GV.textInputSep,
    textTransform:"capitalize"
},
cardtitle:{
  fontSize:18,color:"#9B9B9B",fontFamily:GVs.fontBold,marginTop:"15%",marginLeft:15
},

button1: {width:Window.Width-40, alignItems:"center",justifyContent:"center",borderRadius:4,height:45,alignSelf:"center"},
button1Text:{color:GV.button1TextColor,fontWeight:"bold",fontSize:GV.button1FontSize,width:Window.Width-60}


  });
   