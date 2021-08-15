import React, { useRef, useEffect, useState } from "react";
import { View,Text, ScrollView,Image, TouchableOpacity ,Animated,Alert,FlatList,BackHandler} from "react-native";
import utils from "../../../utils"; 
import { styles,timer,timerc } from "./styles";
import * as Progress from 'react-native-progress';
import GV from "./Gobal_Var";
import GVs from "../../../store/Global_Var"
import moment from "moment";
import { inject, observer } from "mobx-react"; 
 
 function Home (props)   {

  const {user,allUsers,allSkills,addNewSkillInAllSkills,changeCat} = props.store;

  let i=0;                //use index as color array
  let showNumOfStudent=4   //mean only 5 skill shown in  home screen
  let numOfColors=3
  
   const [loader,setloader]=useState(false);
 
 
   const scrollX= useRef(new Animated.Value(0)).current;  //skills
 
 
  
   const onClickStudentCard=(index)=>{
    props.navigation.navigate("Skills",{skillIndex:index,from:"home"})
     }

   const renderStudentCard=()=>{
      
      let Std =  allUsers.map((item,index)=>{

       let ts=0;


//agr skil me chnage ati ya new user ad hta to ye again cal ho ga new values de ga :)
         allSkills.map((e,i,a)=>{
        if(item.id==e.uid){
         
          if(e.s.length>0){
            e.s.map((e,i,a)=>{
              ts++
            })
          }

        }
        })


         const scale = scrollX.interpolate({
            inputRange :[
              -1,0,
              GV.cardHeight * index,
              GV.cardHeight * (index+2)
            ]
            ,  
            outputRange:[1, 1, 1, 0]
          })
    
          const opacity = scrollX.interpolate({
            inputRange :[
              -1,0,
              GV.cardHeight * index,
              GV.cardHeight * (index+0.9)
            ]
            ,  
            outputRange:[1, 1, 1, 0]
          })
         
         if(i>numOfColors){
             i=0
          }
          let clr=GV.color[i];
          i++;
         
          let fn  =  item.FirstName || ""
          let ln  =   item.LastName || ""
          let name= fn+" "+ln 
        
         
          name =utils.strLength(name,"studentnameh")
      
     
   if(index<=showNumOfStudent){
       return(
        <TouchableOpacity onPress={()=>{onClickStudentCard(index)}}>
       <Animated.View style={[styles.skillCard,{opacity,transform:[{scale}],backgroundColor:clr,borderRadius:15}]} >
       
      
       <Text style={{color:"white",fontSize:20,fontFamily:GVs.fontMedium,textTransform:"capitalize",flexShrink:1}}>{name}</Text>
      
       <Text style={{color:"white",fontSize:18,fontFamily:GVs.fontMedium,textTransform:"capitalize",flexShrink:1,alignSelf:"center",marginTop:10}}>Skills</Text>

<View style={{width:100,height:100,borderRadius:50,borderWidth:2,borderColor:"white",alignSelf:"center",marginTop:10,alignItems:"center",justifyContent:"center"}}>  
  <Text  style={{color:"white",fontSize:42,fontFamily:GVs.fontBold,textTransform:"capitalize"}}>{ts}</Text>
</View>

    
   
       </Animated.View>
       </TouchableOpacity>
         )
   }
 


      })


    return Std;
    
   }

   const renderReportCard=()=>{
     
    return(

      <View style={{flexDirection:"row",marginTop:10,marginLeft:15,marginRight:15,justifyContent:"space-between",marginBottom:30}}>
 
 <TouchableOpacity onPress={()=>{props.navigation.navigate("Reports");changeCat("skills")}}>
   <View style={[styles.reportCard,{backgroundColor:"#1675bc",borderRadius:15}]} >

  <Text style={{color:"white",fontSize:20,fontFamily:GVs.fontMedium,textTransform:"capitalize",flexShrink:1}}>Progress</Text>
 

  <utils.vectorIcon.Ionicons name="bulb-outline" color={"white"} size={120} style={{alignSelf:"center",marginTop:20}}/>

      </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=> {props.navigation.navigate("Reports");changeCat("hours")} }>
      <View style={[styles.reportCard,{backgroundColor:"#39b54b",borderRadius:15}]} >
      
      <Text style={{color:"white",fontSize:20,fontFamily:GVs.fontMedium,textTransform:"capitalize",flexShrink:1}}>Hours</Text>

      <utils.vectorIcon.MaterialIcons name="timer" color={"white"} size={120} style={{alignSelf:"center",marginTop:20}}/>
 
      </View>
      </TouchableOpacity>


      </View>

      

        )
   }
  
   const renderDotIndicator=(typ)=>{
      let data=allUsers;
      
      let position = Animated.divide(scrollX,GV.cardWidth);
return(
       <View style={{ flexDirection: 'row',alignSelf:"center",marginTop:15,marginBottom:5}} >
          {data.map((_, i) => 
          {

          
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],  
              outputRange: [0.3, 1, 0.3],        
              extrapolate: 'clamp' 
            });
  
            let num =  showNumOfStudent 
            if(i <= num)
            { 

               return (
              <Animated.View  
                key={i}  
                style={{ opacity,height: 8, width: 8, backgroundColor:'#15756c', margin: 8, borderRadius: 5 }}
              />
            )
         }

           
          })}
        </View>
)
   }

   const renderStudentBox = () =>{

      return(
<View style={styles.skillBox}>
 

<View style={{marginLeft:20,marginRight:20,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25}}>
<Text style={{color:"black",fontSize:20,fontFamily:GVs.fontMedium}}>Students</Text>
  {allUsers.length>0&&(
   <TouchableOpacity onPress={()=>props.navigation.navigate("Students")}>
     <Text style={{color:"#007069",fontSize:16,fontFamily:GVs.fontMedium}}>View All</Text>
   </TouchableOpacity> 
  )}
</View>

{!allUsers.length<=0?
(
 <View>

      <ScrollView  
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX
            }
          }
        }
      ])}
      scrollEventThrottle={5}
     >
    
      {renderStudentCard()}
</ScrollView> 
      {renderDotIndicator("skill")}
</View>
)
:
(
<Text style={{fontSize:25,color:"silver",marginTop:25,alignSelf:"center"}}>Empty</Text>
)}


</View>
      )
   }

   const renderReportBox = () =>{

    return(
<View style={styles.reportBox}>

<View style={{marginLeft:20,marginRight:20,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25}}>
<Text style={{color:"black",fontSize:20,fontFamily:GVs.fontMedium}}>Reports</Text>
</View>
    {renderReportCard()}
</View>
    )
 }
 
   let fn  =  user.FirstName || ""
   let ln  =   user.LastName || ""
   let name= fn+" "+ln 
   
return(
<View style={styles.container}>
 
<utils.Loader loader={loader} /> 
  <View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation}  type="home"  />
</View> 
  
   <ScrollView key={i} showsVerticalScrollIndicator={false}>
 
   <View style={{padding:7,margin:7}}>
   <View style={{marginLeft:5}}> 
   <utils.HeaderTitle title={name} type="welcomemessage" logo={require("../../../assets/Company_Logo/logo.jpg")}/>
   </View>
   </View>

   {renderStudentBox()}
   {renderReportBox()}  
 
   </ScrollView>

  
</View>
)
    
}

export default  inject("store")(observer(Home));

