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
  
     const  logoutcall =  () => {
         setTimeout(async () => {
            try {
                 await AsyncStorage.removeItem('userData')
                  setlogout(true);setloader(false)
             } catch (e) {       
               console.log("logout error remove async storage  : ", e)
             }
         }, (500));   
      }

useEffect(()=>{
logoutcall();
},[])

useEffect(()=>{
   if(logout==true){
   props.navigation.replace("Login_Stack")
   setuser("") 
   setRoom([]) 
   setskill([]) 
   setAllSkills([])
   setAllUsers([])
   changeCat("skills")
   } 
},[logout])
  
return(
<View >   
<utils.Loader loader={loader} />
   </View>
)
    

  }

 
  
export default  inject("store")(observer(Logout));

 
 