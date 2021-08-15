import React, { useState, useEffect} from "react";
import {View,Image } from "react-native";
import {styles} from "./styles"
import utils from "../../utils/index"
import { inject, observer } from "mobx-react"; 
import AsyncStorage from '@react-native-async-storage/async-storage'
import GVs from "../../store/Global_Var"

export default inject("store")(observer(Loading));


   function  Loading (props) {
   
  const [loader,setloader]=useState(true);
  const {data,s,skills}=props.route.params;
  const { setuser,skill,setskill,setAllUsers,allUsers,setAllSkills,setAllSup,setRoom} = props.store;
  const [ss,setss]=useState("cc")
  const [dd,setdd]=useState("dd")

 const  storeUserData = async (value) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(value))
      console.log("store user data success : ")
    } catch (e) {
      console.log("store user data error : ", e)
    }
  }
 
  const getAllSupervisor=()=>{

    let s=[]
    let sprvsr= data.sup;


    let room=[]
    if(GVs.chatrooms.length>0){
      //set  specific user all chat room
    }
   
    if(sprvsr.length>0){

      sprvsr.map((ee,i,a)=>{ 

        if(GVs.users.length>0){
          GVs.users.map((d,i,a)=>{
            if(d.id==ee.sid){
              s.push(d)
            }
         })
        }

      })
     }
 
   
     setRoom(room);
     setAllSup(s);
     getSkillInfo();

  }

  const getSkillInfo=()=>{

    let c= false;
    let sk=[];

  
    
    if(skills!=""){
      sk=skills;
      c=true;
    }else{
      if(GVs.skills.length>0){
  
      GVs.skills.map((d,i,a)=>{
        if(d.uid ==  data.id){
          c=true;
          if(d.s.length>0){
            d.s.map((e,i,a)=>{
              sk.push({e,sid:d.sid})
 
          })
        
  
        } 
        
        }

      })
    }
    }

   
      setss(c);
      setskill(sk);
 
    
 
    }

  const  updateSkillProgress=()=>{
    
     skill.map((e,i,a)=>{
     
       if(skill[i].e.task.length>0){

        skill[i].e.progress=0;
        let c=0;
 
        skill[i].e.task.map((ee,ii,a)=>{
        
           let totaltask=a.length;  //total lngth oy task array   
          
    
           if(ee.result  && ee.submit ){
            
            c++;
             
          let p = (100/totaltask)
          let pp  = (p/100)
          
         
          let fval = skill[i].e.progress+ pp

          if(c==totaltask){

          
          
            if((fval % 1) > 0.5)  //agr 0.999 a jae yani 0.5 se 9 tk to round kr dena 1
          {
           fval = Math.round(fval)
          }

            let c = (fval).toString().split("."); //agr 1.0000 ho to srf 1 lene k lye
            if(c[0]==1){
              fval = c[0]
            }
         
          } 
 
           skill[i].e.progress = fval
       
         
                  }

         })
       
       } 
  
       })

       setloader(false);
       props.navigation.replace(data.type=="user"?"User_Stack":"Supervisor_Stack")
}

const  updateAllSkillProgress=(allSkills)=>{
    
  if(allSkills.length>0){

    allSkills.map((e,i,a)=>{

     
      if(e.s.length>0){

        e.s.map((d,i,a)=>{
        

        if(d.task.length>0){


       d.progress=0;
       let c=0;
  
       d.task.map((ee,ii,a)=>{
       
          let totaltask=a.length;  //total lngth oy task array   
         
   
          if(ee.result==true  && ee.submit==true){
           
           c++;
            
         let p = (100/totaltask)
         let pp  = (p/100)
         
        
         let fval = d.progress+ pp
  
         if(c==totaltask){
  
         
         
           if((fval % 1) > 0.5)  //agr 0.999 a jae yani 0.5 se 9 tk to round kr dena 1
         {
          fval = Math.round(fval)
         }
  
           let c = (fval).toString().split("."); //agr 1.0000 ho to srf 1 lene k lye
           if(c[0]==1){
             fval = c[0]
           }
        
         } 
  
          d.progress = fval
      
        
                 }
  
        })



        }



        })


      }

   
  
      // if(skill[i].e.task.length>0){
  
      //  skill[i].e.progress=0;
      //  let c=0;
  
      //  skill[i].e.task.map((ee,ii,a)=>{
       
      //     let totaltask=a.length;  //total lngth oy task array   
         
   
      //     if(ee.result  && ee.submit ){
           
      //      c++;
            
      //    let p = (100/totaltask)
      //    let pp  = (p/100)
         
        
      //    let fval = skill[i].e.progress+ pp
  
      //    if(c==totaltask){
  
         
         
      //      if((fval % 1) > 0.5)  //agr 0.999 a jae yani 0.5 se 9 tk to round kr dena 1
      //    {
      //     fval = Math.round(fval)
      //    }
  
      //      let c = (fval).toString().split("."); //agr 1.0000 ho to srf 1 lene k lye
      //      if(c[0]==1){
      //        fval = c[0]
      //      }
        
      //    } 
  
      //     skill[i].e.progress = fval
      
        
      //            }
  
      //   })
      
      // } 
  
      })

  }
 

    setAllSkills(allSkills)
    setloader(false);
    props.navigation.replace(data.type=="user"?"User_Stack":"Supervisor_Stack")
  
}

const getAllSkills=( )=>{
  let ask=[]
 if(allUsers.length>0){
  
  allUsers.map((e,i,a)=>{ //alll sprvsr under users

    if(GVs.skills.length>0){
   
      GVs.skills.map((d,i,a)=>{
        if(e.id==d.uid && data.id==d.sid){
          ask.push(d)
        }
      })

    }
 
  })

  
 } 
 
    if(ask.length>0){
      updateAllSkillProgress(ask);
    }else{
    setAllSkills(ask)
    setloader(false);
    props.navigation.replace(data.type=="user"?"User_Stack":"Supervisor_Stack")
    }
 
  
  

}

const getAllUsers=()=>{

  let room=[]
  if(GVs.chatrooms.length>0){
    //set  specific user all chat room
  }
  setRoom(room);

  if(GVs.users.length>0){

    let c=false
    let arr=[]

    GVs.users.map((e,i,a)=>{

      if(e.type=="user"){
       
      if(e.sup.length>0){
        e.sup.map((ee,ii,aa)=>{
          if(data.id==ee.sid){
            c=true;
           arr.push(e)
          }
        })
      }
      }
   

      


    })
    setAllUsers(arr);
    setdd(c)
  }else{
    setloader(false)
    props.navigation.replace(data.type=="user"?"User_Stack":"Supervisor_Stack")
  }
}
  
  useEffect(()=>{

    if(ss==true){
      updateSkillProgress();
    } 

    if(ss==false){
       setloader(false);
      props.navigation.replace(data.type=="user"?"User_Stack":"Supervisor_Stack")
    }
  
      },[ss])

      useEffect(()=>{

        if(dd==true){
          getAllSkills();
        } 
    
        if(dd==false){



          setloader(false);
          props.navigation.replace(data.type=="user"?"User_Stack":"Supervisor_Stack")
        }
          },[dd])
    
  useEffect(()=>{
  
     setuser(data);
     if(s=="yes"){
       storeUserData(data)
      }

     if(data.type=="user"){
      getAllSupervisor();
      
     } 
     else {
        getAllUsers();
     }
     
  },[])

    return (
      <View style={styles.container}>
       <utils.Loader loader={loader} />
      </View>
    );
 
}


 
 
 
 
  
  