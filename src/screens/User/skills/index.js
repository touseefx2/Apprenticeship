import React, { Component,useEffect,useRef,useState} from 'react';
import {View,ScrollView,Image,Text,Animated,TouchableOpacity} from 'react-native';
import utils from "../../../utils/index";
import GVs from '../../../store/Global_Var';
import GV from "./Global_Var"
import { styles } from './styles'; 
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {Window}  from "../../../themes/Window/index"; 
import { inject, observer } from "mobx-react"; 

export default  inject("store")(observer(Skills));

 function  Skills  (props) {
  
  const {skill,addNewSkill,changeSkillName} = props.store;


  let i=0;                //use index as color array
  let numOfColors=4
  const scrollY= useRef(new Animated.Value(0)).current;  //skills
 
 
 
 const onClickCard=(item,index,sid)=>{
props.navigation.navigate("Skills_Task",{indexs:index,sid:sid})
 }

  const pointToPercent=(progress)=>{
  
      return parseInt((progress/10)*1000)
  
  }
 
  const renderSkillCard=()=>{
    
    if(skill.length>0){
        let skil =  skill.map((it,index,a)=>{

       const scale = scrollY.interpolate({
          inputRange :[
            -1,0,
            GV.cardHeight * index,
            GV.cardHeight * (index+4)
          ]
          ,  
          outputRange:[1, 1, 1, 0]
        })
  
        const opacity = scrollY.interpolate({
          inputRange :[
            -1,0,
            GV.cardHeight * index,
            GV.cardHeight * (index+4)
          ]
          ,  
          outputRange:[1, 1, 1, 0]
        })


       

       if(i>numOfColors){
           i=0
        }
        let clr=GV.color[i];
        i++;

        let item=it.e
        let sid=it.sid
       
        let name=  item.name || ""
        let desc=  item.description || ""
        let progress=pointToPercent(item.progress);
        name =utils.strLength(name,"skillnameS")
        desc =utils.strLength(desc,"skilldescShort")
  
          
     return(
     <Animated.View style={{ opacity,transform:[{scale}] }} >
     <TouchableOpacity onPress={()=>{onClickCard(item,index,sid)}} style={[styles.skillCard,{borderRadius:20,marginTop:index==0?15:0,marginBottom:index+1==a.length? 50:20}]} >
       
     <View style={{backgroundColor:clr,left:.2,height:GV.cardHeight-10,marginTop:5,width:9,position:"absolute",borderTopLeftRadius:20,borderBottomLeftRadius:20}}/>  

       
    <View style={{marginLeft:10,padding:5,marginRight:10,flexDirection:"row",backgroundColor:"white"}}>

      <View style={{width:220}}>
      <Text style={{color:"black",fontSize:20,fontFamily:GVs.fontMedium,flexShrink:1,textTransform:"capitalize"}}>{name}</Text>
      <Text style={{color:"#686868",fontSize:12,marginTop:5,flexShrink:1,lineHeight:17}}>{desc}</Text>
      </View>
   
   

     <AnimatedCircularProgress  
      padding={5} size={45} width={3} tintColor={progress==100?"#6dd126":"#2679d1"} backgroundColor={"#e6e6e6"}   fill={progress}  style={styles.skillProgress} >
     {

    (fill) =>  {
      if(fill< 100){
        return(
          <Text style={{fontSize:10,color:"#2679d1"}}>
            {fill}%
          </Text>
          )
      }else{
        return(
          <utils.vectorIcon.Entypo  name="check" size={16} color="#6dd126"   />
          )
      }
     
   }
  
  }
</AnimatedCircularProgress>
 
     

     </View>

     </TouchableOpacity>

     </Animated.View>
       )
 
    })

    return skil;

    }
else{

  return(
    <Text style={{fontSize:32,color:"#919191",marginTop:"65%",alignSelf:"center",marginRight:Window.Width-Window.Width+30}}>Empty</Text>
  )

}
  

 
  
 }
  
    return (
      <View style={styles.container}> 
      {/* <TouchableOpacity onPress={()=>{

const obj=  {
 e:{


  name:"khota",
  description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
  progress:0.7,
 
  deadline:"Deadline - "+new Date().toDateString(),
  task:[
     {
        name:"Login Screen UI",
        hours:"",
        minutes:"40",
     
        require:"Text",
        submit:false,
        result:null,  
     },
     {
        name:"Drawer Navigation UI",
        hours:"1",
        minutes:"",
      
        require:"Photo",
        submit:true,
        result:null,  //acpt
     },{
        name:"Animated UI",
        hours:"2",
        minutes:"",
        
        require:"Audio",
        submit:true,
        result:true,  //rjct
     },
     {
        name:"Create Calender UI",
        hours:"2",
        minutes:"",
        
        require:"Video",
        submit:true,
        result:false,  //in review
     }

  ]


 },
 sid:654
}

addNewSkill(obj)
      }}>
        <Text>AAADddd</Text>
      </TouchableOpacity> */}


  

<View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation} type=""   />
</View>

<View style={{padding:7,margin:7}}>   
   <View style={{marginLeft:5}}> 
   <utils.HeaderTitle   title="Categories"  message={"View the categories and your progress"}   type="headertitle" logo={require("../../../assets/skill.png")}/> 
   </View>
   </View>
       
        <ScrollView   
        style={styles.skillBox}
      showsVerticalScrollIndicator={false}
      onScroll={ Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: scrollY
            }
          },
        }
      ])
 }
      scrollEventThrottle={5}
     >
    
      {renderSkillCard()}
</ScrollView> 

     </View>
    );
 

}

 