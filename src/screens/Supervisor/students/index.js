import React, { Component,useEffect,useRef,useState} from 'react';
import {View,ScrollView,Image,Text,Animated,TouchableOpacity} from 'react-native';
import utils from "../../../utils/index";
import GVs from '../../../store/Global_Var';
import GV from "./Global_Var"
import { styles } from './styles'; 
import {Window}  from "../../../themes/Window/index"; 
import { inject, observer } from "mobx-react"; 

export default  inject("store")(observer(Students));

 function  Students  (props) {
  

  const {allUsers,allSkills} = props.store;

  let i=0;                //use index as color array
  let numOfColors=4
  const scrollY= useRef(new Animated.Value(0)).current;  //skills 
  
 const onClickCard=( index)=>{
props.navigation.navigate("Skills",{skillIndex:index,from:"students"})
 }
 
  const renderSkillCard=()=>{
    
    if(allUsers.length>0){
        let std =  allUsers.map((item,index,a)=>{

        let ts=0;

 
         allSkills.map((e,i,a)=>{
        if(item.id==e.uid){
         
          if(e.s.length>0){
            e.s.map((e,i,a)=>{
              ts++
            })
          }

        }
        })

    
       
       if(i>numOfColors){
           i=0
        }
        let clr=GV.color[i];
        i++;
       
        let fn  =  item.FirstName || ""
        let ln  =   item.LastName || ""
        let name= fn+" "+ln 
 
        let desc=  item.description || ""
        name =utils.strLength(name,"skillnameS")
        desc =utils.strLength(desc,"skilldescShort")

 
  

        return(
     <View >
     <TouchableOpacity onPress={()=>{onClickCard(index)}} style={[styles.skillCard,{borderRadius:20,marginTop:index==0?15:0,marginBottom:index+1==a.length? 50:20}]} >
          
          <View style={{backgroundColor:clr,left:.2,height:GV.cardHeight-10,marginTop:5,width:9,position:"absolute",borderTopLeftRadius:20,borderBottomLeftRadius:20}}/>  
        
          
       <View style={{marginLeft:10,padding:5,marginRight:10,flexDirection:"row",backgroundColor:"white"}}>
     
         <View style={{width:220}}>
         <Text style={{color:"black",fontSize:19,fontFamily:GVs.fontMedium,flexShrink:1,
        // textTransform:"capitalize"
       }}>{name}</Text>
         <Text style={{color:"#686868",fontSize:12,marginTop:5}}>Num Of Skills</Text>
         </View>
      
      
       
        <View style={{backgroundColor:"#9B9B9B",width:1,height:"100%",alignSelf:"center"}} />
      
     
        <View style={{marginLeft:10,alignSelf:"center",flex:1}}>
        <Text style={{color:"#007069",fontSize:ts.toString().length==1?35:ts.toString().length==2?30:25,fontFamily:GVs.fontBold,alignSelf:"center"}}>{ts}</Text>
         </View>
       
        </View>
     
        </TouchableOpacity>
     
        </View>
          )
 
    })

    return std;

    }
else{

  return(
    <Text style={{fontSize:32,color:"#919191",marginTop:"65%",alignSelf:"center",marginRight:Window.Width-Window.Width+30}}>Empty</Text>
  )

}
 
  
 }
  
    return (
      <View style={styles.container}> 
   
<View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation} type=""   />
</View>

<View style={{padding:7,margin:7}}>   
   <View style={{marginLeft:5}}> 
   <utils.HeaderTitle   title="Students"  message={"View Your Students"}   type="headertitle"  /> 
   </View>
   </View>
       
        <ScrollView   
        style={styles.skillBox}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={5}
     >
    
      {renderSkillCard()}
</ScrollView> 

     </View>
    );
 

}

 