import React, { Component, useEffect,useState} from "react";
import {View,Image,Text} from "react-native";
import {Button} from 'react-native-paper';
import GV from "./Global_Var";
import utils from "../../utils/index"
import {styles} from "./styles"
import GVs from "../../store/Global_Var";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { inject, observer } from "mobx-react"; 


export default  inject("store")(observer(LoginSample));

  
 function LoginSample(props){

  const [loader,setloader]=useState(true);
 
  const {setskill,setuser,setRoom,setAllSkills,setAllUsers,changeCat} = props.store;

useEffect(()=>{
  setuser("") 
  setRoom([]) 
  setAllUsers([])
  changeCat("skills")
  setskill([]) 
  setAllSkills([])

  getUserData()
},[])
 
  
 const  goToNextScreen=(screenName)=>{
  setloader(false)
     props.navigation.navigate(screenName)
   } 

  const getUserData = async () => {
    try {
       const jsonValue = await AsyncStorage.getItem('userData')
      const jsonValue2 = await AsyncStorage.getItem('userSkillData')

      if (jsonValue != null) {

        const v = JSON.parse(jsonValue)

        let skills="";
        if (jsonValue2 != null) {
          const vv = JSON.parse(jsonValue2)
          if(v.id==vv.uid){
           skills=vv.skill.skill
          }
        } 
 
        setloader(false)

        props.navigation.replace("Loading",{data:v,s:"no",skills:skills})
    
      }  else{
       setloader(false)
      }

    } catch (e) {

      setloader(false)

      console.log("get user data error : ", e)
   
    }
  }

   
    return (
<View style={styles.container}>

<utils.Loader loader={loader} />

<View style={styles.title}>
<Image  style={styles.image} resizeMode="contain" source={require("../../assets/Splash_Logo/logo.png")} />
<Text style={styles.title1}>{GV.title1}</Text>
<Text style={styles.title2}>{GV.title2}</Text>
</View>

<Button   mode="contained" dark={true} compact={true} labelStyle={styles.button1Text} color="white" style={styles.button1} onPress={() =>goToNextScreen("Login")}>
{GV.button1title}   
</Button>
 
        </View>
    );
 
}

