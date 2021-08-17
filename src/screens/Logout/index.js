import React, { Component, useEffect,useState } from "react";
import { View} from "react-native";
import utils from "../../utils/index"
import AsyncStorage from '@react-native-async-storage/async-storage'
import GVs from "../../store/Global_Var"
import { inject, observer } from "mobx-react"; 


  function Logout (props) {
   
const [logout,setlogout]=useState(false);
const [loader,setloader]=useState(true);
const {setskill,setuser,setRoom,setAllSkills,setAllUsers,changeCat} = props.store;
  
     const  logoutcall = async () => {
        
            try {
                 await AsyncStorage.removeItem('userData')
             } catch (e) {       
               console.log("logout error remove async storage  : ", e)
             }
             setloader(false)
      }

useEffect(()=>{
  
  setTimeout(() => {
    setlogout(true)
  }, 300);

})

 
useEffect(()=>{
   if(logout==true){
   props.navigation.replace("Login_Stack")
   logoutcall();
   } 
},[logout])
  
return(
<View >   
<utils.Loader loader={loader} />
   </View>
)
    

  }

 
  
export default  inject("store")(observer(Logout));

 
 