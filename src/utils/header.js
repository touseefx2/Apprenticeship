import React  from "react";
import { View,StyleSheet,Image, TouchableOpacity,Text} from "react-native";
import { Window } from "../themes/Window";
import utils from "./index"
import { inject, observer } from "mobx-react"; 

export default  inject("store")(observer(Header));


  function Header (props) {

    const {deleteRoomInRooms,room,setRoomSort} = props.store;


  let headerTitle=props.title || "";
  let type=props.type || ""
  headerTitle= utils.strLength(headerTitle,"headertitle")
  
  let cm= props.cm || ""  //check chat messageslength in chat box
  let roomIndex= props.ri || ""

   if(type=="stack"){

    return(

<View style={{backgroundColor:null,width:60}}>
<utils.vectorIcon.Ionicons  name="arrow-back-outline" size={40} color="black" onPress={()=>{
if(room.length>1){
  setRoomSort();
  }
    if(cm==0){
    deleteRoomInRooms(roomIndex)
    }
   
   props.nav.goBack()
   
  }} /> 
</View>

    )

    
   } 
    else {
    return(
      <View style={{flexDirection:"row",backgroundColor:null,alignItems:"center"}}>
      
      <utils.vectorIcon.Ionicons  name="md-menu" size={40} color="#007069" onPress={()=>props.nav.openDrawer()} />
      
      
     
      {(type=="home" ) &&
       <TouchableOpacity style={styles.bell} onPress={()=>props.nav.navigate("Notification")}>
          <utils.vectorIcon.Fontisto name="bell" color="black" size={25}/> 
        </TouchableOpacity>
    }
      
        
      </View>
      
          )
  }

}



const styles = StyleSheet.create({
                                  
    bell: {
      right:0,    
      position:"absolute",
 
    } ,
   image: {
        width: 40,
        height: 40,
        borderRadius: 20,
      //  borderWidth: 2,
      //  borderColor: "black",
      } ,
     
  })
  