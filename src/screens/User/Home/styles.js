import {StyleSheet} from "react-native";
import {Window}  from "../../../themes/Window/index";
import GV from "./Gobal_Var"

 

 export const timer = {
  container: {
    backgroundColor: null,
  },
  text: {
    fontSize: 18,
    color: '#FFF',
    marginLeft:10
  }
};

export const timerc = {
 container: {
   backgroundColor: null,
 },
 text: {
   fontSize: 0,
   color:null,

 }
};



export const styles = StyleSheet.create({
   container:{ flex: 1,backgroundColor:"white"},
 
   timeBox:
   {
   position:"absolute",right:35,top:5,
   flexDirection:"row",alignItems:"center",
 
  },
   timerCard:
   {
    borderRadius:5,
    flexDirection:"row",
    backgroundColor:null,
    alignItems:"center",
  },
   companyLogo: {
     width: 50,
     height: 50,
    resizeMode:"contain",
    opacity:0.8
   } ,
   
   companyMsg:{
     marginLeft:10,
     fontSize:22,
     fontWeight:"bold",
     color:"#2467bf",
     textTransform:"capitalize"
   },
 
skillLogo: {
  width: 35,
  height: 35,
 resizeMode:"contain",
 
} ,
   skillBox:
       {
        width:Window.Width, 
        backgroundColor:"white",
       //  shadowColor:"black",
      //   elevation:5,
      },
      reportBox:
       {
        width:Window.Width, 
        backgroundColor:"white",
       //  shadowColor:"black",
      //   elevation:5,
        //  marginBottom:"5%"
      },
      skillCard:
       {
         flex:1,
        width:GV.cardWidth,
        height:GV.cardHeight,
        padding:15,
        marginTop:10,
        marginLeft:15,marginRight:15
        //shadowColor:"black",
       // elevation:2
      },
      reportCard:
      {
       width:GV.cardWidth-25,
       height:GV.cardHeight,
       padding:15,
       //shadowColor:"black",
      
      // elevation:2
     },
      skillProgressView:{
        position:"absolute",bottom:10,padding:10,alignSelf:"center"
      },
      skillProgress:{
        borderColor:"white",
        borderWidth:.5,
        borderRadius:5,
        backgroundColor:"#e6e6e6"
      },
      
   

});
