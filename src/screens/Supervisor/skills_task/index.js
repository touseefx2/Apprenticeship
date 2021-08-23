import React, {useEffect,useState,useRef} from 'react';
import {View,Animated,Text,TouchableOpacity,ScrollView} from 'react-native';
import utils from "../../../utils/index";
import GVs from '../../../store/Global_Var';
import GV from "./Global_Var"
import { styles } from './styles'; 
import {Window}  from "../../../themes/Window/index"; 
import * as Progress from 'react-native-progress';
import { inject, observer } from "mobx-react"; 
import ModalSelector from 'react-native-modal-selector'
 
  function   Component(props){
    let s=props.s
  return(
              <View style={{flexDirection:"row",alignItems:"center"}}> 
              <utils.vectorIcon.AntDesign  name="rightcircle" 
              color={s=="all"?"silver":s=="pending"?"#FDCC0D":s=="not submitted"?"silver":s=="approved"?"#1CB703":"#FF0000"} size={20} />
              <Text style={{textTransform:"capitalize",fontSize:16,fontFamily:GVs.fontMedium,marginLeft:10}}>{s}</Text>
              </View>
             
  )
}
 
 let index=0;
const filterData = [
    { key:index++, section: true, label: 'Filter By',},
    { key:index++, label: 'all',component:<Component s={"all"}  />},
    { key:index++, label: 'pending',component:<Component s={"pending"}  />},
    { key:index++, label: 'not submitted',component:<Component s={"not submitted"}  />},
    { key:index++, label: 'approved',component:<Component s={"approved"}  />},
    { key:index++, label: 'rejected',component:<Component s={"rejected"}  />},
  ];

export default  inject("store")(observer(Skills_Task));

  function  Skills_Task  (props) {
   
  const {skillIndex,indexs,from}=props.route.params
  const {allSkills} = props.store;
  const item = allSkills[indexs].s[skillIndex]  

  const [loader,setloader]=useState(true);
  const [cat,setcat]= useState("all");
  const [tt,settt]= useState(0);
  const modal = useRef(); 
  const scrollY= useRef(new Animated.Value(0)).current;  //skills
 
 
  useEffect(()=>{
setTimeout(() => {
  setloader(false);
}, 500);
  },[])

  useEffect(()=>{
    let ii=0;
    if(item.task.length>0){
      item.task.map((item,index,a)=>{
      let chk= false;
      if(cat=="all"){chk=true}
      if(cat=="pending"?item.submit==true && item.result==null
      :cat=="not submitted"?item.submit==false && item.result==null
      :cat=="approved"?item.submit==true && item.result==true
      :cat=="rejected"?item.submit==true && item.result==false
      :chk)
           {
             ii++;
           }
      })
    } 
    settt(ii)
  },[cat])
 
  const pointToPercent=(progress)=>{
    if(progress==1){
      return progress*100
    }else if(progress<1){
      return parseInt((progress/10)*1000)
    }
  }
 
  const renderCheck=(s,r)=>{   
    let color="white";
    if(!s && r==null){
     color="white";
    }
    if(s==true && r==true){
      color="#1CB703";
    }
    if(s==true && r==false){
      color="#FF0000";
    }
    if(s==true && r==null){
      color="#FDCC0D";
    }


  return (
    <View
    style={{backgroundColor:color,left:.2,height:GV.cardHeight-10,marginTop:5,width:9,position:"absolute",borderTopLeftRadius:20,borderBottomLeftRadius:20}} />
  )
   
  }

  const onClickTask=(index,s,r)=>{

    if((s&&r)||(s&&r==false)||(s&&r==null)){
      props.navigation.navigate("Skills_Task_Submit",{taskIndex:index,skillIndex:skillIndex,indexs:indexs,from:from})
    }
  
  }
  
 const renderSkillTask=()=>{
     
  let task =   item.task.map((it,index,a)=>{
  
     const scale = scrollY.interpolate({
        inputRange :[
          -1,0,
          GV.cardHeight * index,
          GV.cardHeight * (index+10)
        ]
        ,  
        outputRange:[1, 1, 1, 0]
      })

      const opacity = scrollY.interpolate({
        inputRange :[
          -1,0,
          GV.cardHeight * index,
          GV.cardHeight * (index+10)
        ]
        ,  
        outputRange:[1, 1, 1, 0]
      })
     
      
      let item=it
     
     
      let ts=false;  //time start
       it.work.map((e,i,a)=>{
        if(e.E==""){
         ts=true;
        }
      })
 
        let name=  item.name || ""
        let require=  item.require || ""
        name =utils.strLength(name,"taskname")
        let hours=  item.hours || ""
        let minutes = item.minutes || ""
  
        let time= "";
        let t=0;
        if(hours==""){
        time="Minutes"
        t=minutes
        }else if (minutes==""){
        time="Hours"
        t=hours
        }
   
       
     let chk= false;
     if(cat=="all"){chk=true}


        if(cat=="pending"?item.submit==true && item.result==null
        :cat=="not submitted"?item.submit==false && item.result==null
        :cat=="approved"?item.submit==true && item.result==true
        :cat=="rejected"?item.submit==true && item.result==false
        :chk)
        {
      
          
          return(
            <Animated.View style={{ opacity,transform:[{scale}] }} >
            
            <TouchableOpacity  style={[styles.skillTaskCard,{borderRadius:20,marginTop:index==0?20:0,marginBottom:index+1==a.length? 50:20}]} 
            onPress={()=>onClickTask(index,item.submit,item.result)}  >
              
              {renderCheck(item.submit,item.result)}
            
              
           <View style={{marginLeft:10,padding:5,marginRight:10,flexDirection:"row",backgroundColor:"white"}}>
         
             <View style={{width:211}}>
             <Text style={{color:"black",fontSize:19,fontFamily:GVs.fontMedium,flexShrink:1,
            // textTransform:"capitalize"
           }}>{name}</Text>
             <Text style={{color:"#686868",fontSize:12,marginTop:5}}>Required:</Text>
             <Text style={{color:"#686868",fontSize:12,marginTop:2,flexShrink:1,fontWeight:"bold"}}>{require}</Text>
             </View>
          
          
            {ts&&<utils.vectorIcon.Ionicons name="timer-outline" color="red" size={15} style={{position:"absolute",right:-3,top:-3}} /> }  
            <View style={{backgroundColor:"#9B9B9B",width:1,height:"100%",alignSelf:"center"}} />
          
         
            <View style={{marginLeft:20,alignSelf:"center"}}>
             <Text style={{color:"#686868",fontSize:12,flexShrink:1,textTransform:"capitalize",alignSelf:"center"}}>{time}</Text>
             <Text style={{color:"#007069",fontSize:30,fontFamily:GVs.fontBold,alignSelf:"center"}}>{t}</Text>
             </View>
           
            </View>
         
            </TouchableOpacity>
         
            </Animated.View>
              )
        }

    
  })
 
  return task;
  }


  const catg=()=>{
    return(
       <View style={{flexDirection:"row",alignItems:"center"}} >

   
    <utils.vectorIcon.AntDesign name="filter" color={"#9B9B9B"}  size={25} onPress={()=>{modal.current.open()}} />
    <ModalSelector
  animationType="slide"
  ref={modal}
  backdropPressToClose={true}
  data={filterData}
  scrollViewAccessible={true}
  sectionTextStyle={{fontSize:20,color:"black",fontFamily:GVs.fontMedium}} 
  cancelTextStyle={{fontSize:20,color:"black",fontFamily:GVs.fontMedium}}
  initValue={cat} 
  openButtonContainerAccessible={true}
  selectStyle={{borderColor:"white",height:40,alignItems:"center"}}
  optionContainerStyle={{backgroundColor:"white",borderRadius:15,width:250,alignSelf:"center"}}
  optionTextStyle={{color:"black"}}
  initValueTextStyle={{color:"#9B9B9B",fontSize:15,fontFamily:GVs.fontMedium,textTransform:"capitalize",alignSelf:"center"}}
  cancelStyle={{backgroundColor:"white",borderRadius:15,width:250,alignSelf:"center"}}
  onChange={(option)=>{setcat(option.label)}} />
 
</View>
 
  )
 
  }
 
    return (
      <View style={styles.container}> 
  
 

<View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation} type="stack"  />
</View>

<View style={{padding:7,margin:7}}>   
   <View style={{marginLeft:5}}> 
   <utils.HeaderTitle   title={item.name} st={"View the Tasks"}   type="headertitle" />
   </View>
   <View style={styles.skillProgressBox}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
          <Text style={styles.skillProgressText}>Progress</Text>
          <Text style={styles.skillProgressText}>{pointToPercent(item.progress)}%</Text>
</View>
                
<Progress.Bar animated={true} color={GV.progressFillColor} style={styles.skillProgress} progress={item.progress} height={6} width={Window.Width-30} />
 
<TouchableOpacity style={{marginTop:10,alignSelf:"flex-end"}}   onPress={()=>{modal.current.open()}}>
   {catg()}
   </TouchableOpacity>
 

 
<Text style={{ position:"absolute",top:65,color:"#9B9B9B",fontSize:12,fontFamily:GVs.fontMedium}}>{tt==0?"No":tt} {tt==1?"record":"records"} found</Text>

</View> 
   </View>
 
 <utils.Loader loader={loader} />
    
{!loader && (

<ScrollView   
style={styles.skillTaskBox}
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
scrollEventThrottle={1}
>
  {item.task.length<=0 
      ?(
      <Text style={{fontSize:35,color:"silver",marginTop:"55%",alignSelf:"center"}} >Empty</Text>
      )
     :(
      renderSkillTask()
     )
     }  

</ScrollView> 
  
)}
      
     </View>
    );
  
}
