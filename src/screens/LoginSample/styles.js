 import {StyleSheet} from "react-native";
 import GV from "./Global_Var"
 import {Window}  from "../../themes/Window/index";
 import GVs from "../../store/Global_Var";

 export const styles = StyleSheet.create({
   container:{flex:1,backgroundColor: GV.containerBackgroundColor},
   title:{padding:10,margin:10,marginTop:"10%"},
   title1:{fontSize:36,color:"white",marginTop:23,fontFamily:GVs.fontBold},
   title2:{fontSize:24,color:"white",marginTop:10},
   image:{width:104,height:99},
   button1: {width:Window.Width-40, position:"absolute",bottom:15,alignItems:"center",justifyContent:"center",borderRadius:4,height:45,alignSelf:"center"},
   button1Text:{color:GV.button1TextColor,fontWeight:"bold",fontSize:GV.button1FontSize,width:Window.Width-60}

 });
