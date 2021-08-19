import React, { useRef, useEffect, useState } from "react";
import { View,Text, ScrollView,Image, TouchableOpacity ,Animated,Alert,FlatList} from "react-native";
import utils from "../../../utils"; 
import { styles,timer,timerc} from "./styles";
import * as Progress from 'react-native-progress';
import GV from "./Gobal_Var";
import GVs from "../../../store/Global_Var"
import { inject, observer } from "mobx-react"; 

export default  inject("store")(observer(Home));

 function Home (props)   {
    
  let i=0;                //use index as color array
  let showNumOfSkills=4   //mean only 5 skill shown in  home screen
  let showNumOfReports=4   //mean only 5 skill shown in  home screen
  let numOfColors=3
 
 
  let report=GVs.report
  

  
   const [play,setplay]=useState(false)
   const [s,sets]=useState(false)

   const {skill,user,changeCat,allSup} = props.store;
 
    
   const [loader,setloader]=useState(false);
 
 
   const [timeBarOpen,settimeBarOpen]=useState(false)
   const scrollXS= useRef(new Animated.Value(0)).current;  //skills
   const scrollXR= useRef(new Animated.Value(0)).current;   //reports
   const animatedWidth = new Animated.Value(35)

  
   useEffect(()=>{
    
    console.log("all suprvsr : ",allSup)

    console.log("skills : ",skill)
   })

   
   useEffect(()=>{
      if(timeBarOpen) {
         animatedBoxOpen()
      }
      if(!timeBarOpen) {
         animatedBoxClose()
      }
   },[timeBarOpen])

   const  animatedBoxOpen = () => {
    Animated.timing( animatedWidth, {
       toValue:100,
       duration: 500,
       useNativeDriver: false
    }).start()
    // Animated.timing(animatedHeight, {
    //    toValue: 32,
    //    duration: 500,
     
    // }).start()
 }

 const  animatedBoxClose = () => {
    Animated.timing( animatedWidth, {
       toValue: 35,
       duration: 500,
       useNativeDriver: false
    }).start()
    // Animated.timing(animatedHeight, {
    //    toValue: 32,
    //    duration: 500,
     
    // }).start()
 }
     
   const onClickSkillCard=(item,index,sid)=>{
    props.navigation.navigate("Skills_Task",{indexs:index,from:"home",sid:sid})
     }

   const renderSkillCard=()=>{
      
      let Skills =   skill.map((item,index)=>{

         const scale = scrollXS.interpolate({
            inputRange :[
              -1,0,
              GV.cardHeight * index,
              GV.cardHeight * (index+2)
            ]
            ,  
            outputRange:[1, 1, 1, 0]
          })
    
          const opacity = scrollXS.interpolate({
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
         
          let name=  item.e.name || ""
          let desc=  item.e.description || ""
          name =utils.strLength(name,"skillname")
          desc =utils.strLength(desc,"skilldesc")
     
   if(index<=showNumOfSkills){
       return(
        <TouchableOpacity onPress={()=>{onClickSkillCard(item,index,item.sid)}}>
       <Animated.View style={[styles.skillCard,{opacity,transform:[{scale}],backgroundColor:clr,borderRadius:15}]} >
       
      
       <Text style={{color:"white",fontSize:20,fontFamily:GVs.fontMedium,textTransform:"capitalize",flexShrink:1}}>{name}</Text>
      
       <View style={{marginTop:15}}>
       <Text style={{color:"white",fontSize:12,flexShrink:1,fontFamily:GVs.fontMedium,lineHeight:20}}>{desc}</Text>
       </View>
   
   <View style={styles.skillProgressView}>
       <Progress.Bar   color={GV.progressFillColor}   style={styles.skillProgress} progress={Number(item.e.progress || 0)} width={160} />
       </View>    
      
       </Animated.View>
       </TouchableOpacity>
         )
   }
 


      })


    return Skills;
    
   }

   const renderReportCard=()=>{
     
    return(

      <View style={{flexDirection:"row",marginTop:10,marginBottom:20,marginLeft:15,marginRight:15}}>
 
 <TouchableOpacity onPress={()=>{props.navigation.navigate("Reports");changeCat("skills")}}>
   <View style={[styles.reportCard,{backgroundColor:"#1675bc",borderRadius:15}]} >

  <Text style={{color:"white",fontSize:20,fontFamily:GVs.fontMedium,textTransform:"capitalize",flexShrink:1}}>Skills</Text>
 

  <utils.vectorIcon.Ionicons name="bulb-outline" color={"white"} size={120} style={{alignSelf:"center",marginTop:20}}/>

      </View>
      </TouchableOpacity>


      <TouchableOpacity  style={{marginLeft:15}} onPress={()=> {props.navigation.navigate("Reports");changeCat("hours")} }>
      <View style={[styles.reportCard,{backgroundColor:"#39b54b",borderRadius:15}]} >
      
      <Text style={{color:"white",fontSize:20,fontFamily:GVs.fontMedium,textTransform:"capitalize",flexShrink:1}}>Hours</Text>

      <utils.vectorIcon.MaterialIcons name="timer" color={"white"} size={120} style={{alignSelf:"center",marginTop:20}}/>
 
      </View>
      </TouchableOpacity>


      </View>

      

        )
   }
  
   const renderDotIndicator=(typ)=>{
      let data=null;
      if(typ=="skill"){data=skill}
      if(typ=="report"){data=report}
      
      let position = Animated.divide( typ=="skill"?scrollXS:scrollXR, typ=="skill"?GV.cardWidth:GV.cardWidthR);
return(
       <View style={{ flexDirection: 'row',alignSelf:"center",marginTop:15,marginBottom:typ=="report"?"7%":0}} >
          {data.map((_, i) => 
          {

          
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],  
              outputRange: [0.3, 1, 0.3],        
              extrapolate: 'clamp' 
            });
  
            let num = "skill"?showNumOfSkills:showNumOfReports; 
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

   const renderSkillBox = () =>{

      return(
<View style={styles.skillBox}>

<View style={{marginLeft:20,marginRight:20,marginBottom:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25}}>
<Text style={{color:"black",fontSize:20,fontFamily:GVs.fontMedium}}>Categories</Text>
{skill.length>0 &&(
  <TouchableOpacity onPress={()=>props.navigation.navigate("Skills")}>
<Text style={{color:"#007069",fontSize:16,fontFamily:GVs.fontMedium}}>View All</Text>
</TouchableOpacity>
)}
</View>

{skill.length>0?
(
 <View>

      <ScrollView  
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: scrollXS
            }
          }
        }
      ])}
      scrollEventThrottle={5}
     >
    
      {renderSkillCard()}
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

<ScrollView     horizontal={true} showsHorizontalScrollIndicator={false}   >
{renderReportCard()}
 </ScrollView>
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

   {renderSkillBox()}
   {renderReportBox()}  
 
   </ScrollView>

  
</View>
)
    
}

