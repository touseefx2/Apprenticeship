import React, { Component,useEffect,useRef,useState} from 'react';
import {View,ScrollView,Image,Text,Animated,TouchableOpacity} from 'react-native';
import utils from "../../../utils/index";
import GVs from '../../../store/Global_Var';
import GV from "./Global_Var"
import { styles } from './styles'; 
import {Window}  from "../../../themes/Window/index"; 
import { inject, observer } from "mobx-react"; 
import moment from "moment";


export default  inject("store")(observer(Submissions));

 function  Submissions  (props) {
  

  const {allUsers,allSkills} = props.store;

  
  const scrollY= useRef(new Animated.Value(0)).current;  //skills 
  
 const onClickCard=(item,index)=>{
  props.navigation.navigate("Skills_Task_Submit",{taskIndex:item.ti,skillIndex:item.si,indexs:item.i,from:"submissions"})
 }
 
  const renderSubmitSkillCard=()=>{

    let arr=[];

    if(allSkills.length>0){
       arr=[];
      allSkills.map((e,i,a)=>{
        console.log("e : ",e)
  
        e.s.map((d,ii,aa)=>{
          console.log("d : ",d)

          if(d.task.length>0){
            d.task.map((dd,iii,aaa)=>{
              
              if(dd.submit==true&&dd.result==null){
                console.log("dd : ",dd)

                let uid=""
                let username=""
                let skillname=d.name

                if(allUsers.length>0){
                  allUsers.map((a,b,c)=>{
                    if(a.id==e.uid){
                     uid=a.id;
                     let fn  =  a.FirstName || ""
                      let ln  =  a.LastName || ""
                      username=fn+" "+ln 
                     
                    }
                  })
                }

                const obj={si:ii,ti:iii,i:i,sn:skillname,un:username,uid:uid,t:dd.createdAt,dd}
                arr.push(obj)
              }
             

            })
          }



        })
  
  
      })

    }

   

   if(arr.length>0){
    arr.sort((a, b) => {return (moment(b.t)).diff(moment(a.t)) } )
    console.log("arr : ",arr)

    let skills=arr.map((item,index,a)=>{

      const scale = scrollY.interpolate({
                  inputRange :[
                    -1,0,
                    GV.cardHeight * index,
                    GV.cardHeight * (index+2)
                  ]
                  ,  
                  outputRange:[1, 1, 1, 0]
                })
          
                const opacity = scrollY.interpolate({
                  inputRange :[
                    -1,0,
                    GV.cardHeight * index,
                    GV.cardHeight * (index+2)
                  ]
                  ,  
                  outputRange:[1, 1, 1, 0]
                })
              
               
            
               let name =utils.strLength(item.un,"skillnameS")
               let sn= utils.strLength(item.sn,"skillnameSub")
               let tn= utils.strLength(item.dd.name,"tasknameSub")

               let c =  item.t
               var time =  moment(c).format('hh:mm a')     //10:12 am 
               var date =  moment(c).format("D MMMM Y");   //9 july 2021
               c= date + " at  "+time
         
          
        
                return(
             <Animated.View style={{ opacity,transform:[{scale}] }} >
             <TouchableOpacity onPress={()=>{onClickCard(item,index)}} style={[styles.skillCard,{borderRadius:20,marginTop:index==0?15:0,marginBottom:index+1==a.length? 50:20}]} >
                  
                  <View style={{backgroundColor:"#FDCC0D",left:.2,height:GV.cardHeight-10,marginTop:5,width:9,position:"absolute",borderTopLeftRadius:20,borderBottomLeftRadius:20}}/>  
                
                  
               <View style={{marginLeft:10,padding:5,marginRight:10,flexDirection:"row",backgroundColor:"white"}}>
             
                 <View style={{flex:1}}>
                 <Text style={{color:"black",fontSize:19,fontFamily:GVs.fontMedium,flexShrink:1,
               textTransform:"capitalize"
               }}>{name}</Text>
                <Text style={{color:"#686868",fontSize:14,marginTop:5}}>{sn}</Text>
                <Text style={{color:"#686868",fontSize:14}}>{tn}</Text>
                 <Text style={{color:"#686868",fontSize:10,marginTop:5}}>Submit : {c}</Text>
                 </View>
              
              
               
                {/* <View style={{backgroundColor:"#9B9B9B",width:1,height:"100%",alignSelf:"center"}} />
              
             
                <View style={{marginLeft:10,alignSelf:"center",flex:1}}>
                <Text style={{color:"#007069",fontSize:ts.toString().length==1?35:ts.toString().length==2?30:25,fontFamily:GVs.fontBold,alignSelf:"center"}}>{ts}</Text>
                 </View>
                */}
                </View>
             
                </TouchableOpacity>
             
                </Animated.View>
                  )


      
    })

    return skills;

   }else{
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
   <utils.HeaderTitle   title="Submissions"  message={"View The Recent Submissions Skills "}   type="headertitle"  /> 
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
    
      {renderSubmitSkillCard()}
</ScrollView> 

     </View>
    );
 

}

 