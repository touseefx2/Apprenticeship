import React, {useRef,useEffect,useState} from 'react';
import {Text,View,Image,ScrollView, ActivityIndicator,TouchableOpacity,Keyboard,Modal,TextInput} from 'react-native';
import utils from "../../../utils/index";
import {styles} from "./styles"
import GVs from "../../../store/Global_Var";
import { Window } from '../../../themes/Window';
import moment from "moment";
import {requestCameraPermission,requestReadExternalStorage,requestWriteInternalStorage} from "../../../services/permissions/index"
import MultipleImagePicker from "@baronha/react-native-multiple-image-picker"; 
import DeviceInfo from 'react-native-device-info';
import ImagePicker from "react-native-customized-image-picker"; 
import { inject, observer } from "mobx-react"; 

export default  inject("store")(observer(ChatBox));


function   ChatBox  (props) {
  
 
 const {user,allSup,room,setRoom,addRoom} = props.store;
 
   
  const [loader,setloader]=useState(true);
 
  

useEffect(()=>{
  // console.log( "room : ",room)
   setTimeout(() => {
     setloader(false)
   }, 500);
})

const onClickSup=(spd)=>{

  if(room.length>0){

    let c=false;
    let ii=null;
    let count=0;

    room.map((e,i,a)=>{ 
       count=i;
     if(e.id1== user.id && e.id2==spd.id ){
       c=true;
       ii=i;
     }
   })

   
  //already create room
   if(c==true&&ii!=null){
    props.navigation.navigate("Chat",{ri:ii,spd:spd})
   }

  //no any room find so add new room
   if(c==false&&ii==null){
    let date=new Date().toString()
    const obj={
               id1:user.id,  // current user id
               id2:spd.id,      //spsrrv id
               createdAt:date,
               last_Message:"",
               messages:[],
               updatedAt:date
              }
              addRoom(obj)  ;
              props.navigation.navigate("Chat",{ri:count+1,spd:spd})
   }

       }
       else{
         let date=new Date().toString()
         const obj={
                    id1:user.id,  // current user id
                    id2:spd.id,      //spsrrv id
                    createdAt:date,
                    last_Message:"",
                    messages:[],
                    updatedAt:date
                   }

         addRoom(obj)
         props.navigation.navigate("Chat",{ri:0,spd:spd})
      
       }

}

const onClickChat=(sd,i)=>{
  props.navigation.navigate("Chat",{ri:i,spd:sd})
}

       let  sfn=""
       let sln=""
       let supn =""
       let fsupn =""
 
return (
    <View style={styles.container}>

<View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation} type=""   />
</View>

<View style={{padding:7,margin:7}}>   
 <View style={{marginLeft:5}}> 
 <utils.HeaderTitle   title={"Chats"}  type="headertitle" /> 
 </View>
 </View>
 

<View style={{elevation:3,backgroundColor:"white"}}>
 
{allSup.length<=0&&(
<View>
<Text style={{fontSize:16,color:"#919191",alignSelf:"center",marginTop:10,marginBottom:10}}>No Any Supervisor Found</Text>
</View>)}

{allSup.length>0&&(
<ScrollView contentContainerStyle={{marginTop:10,marginBottom:10}} showsHorizontalScrollIndicator={false} horizontal> 
{
  allSup.map((e,i,a)=>{
    let fn  = e.FirstName || ""
    let ln  =  e.LastName || ""
    let n= fn.charAt(0)+ln.charAt(0)
 
    return(
      <TouchableOpacity onPress={()=>{onClickSup(e)}}>
      <View style={{marginLeft:15,marginRight:15,backgroundColor:"#007069",width:50,height:50,borderRadius:25,alignItems:"center",justifyContent:"center"}}>
     <Text style={{color:"white",fontSize:18,fontFamily:GVs.fontMedium,textTransform:"uppercase"}}>{n}</Text>   
      </View>
      </TouchableOpacity>
    )
  })
}
 
  </ScrollView>
  )}
 
</View>

{room.length<=0&&(
  <Text style={{fontSize:20,color:"#919191",alignSelf:"center",marginTop:"50%"}}>No messages yet</Text>
)}

{room.length>0&&(
  <ScrollView   showsVerticalScrollIndicator={false}>
     {
     room.map((e,i,a)=>{
         
       let cd= moment(new Date()).format("D MMMM Y");  //curent date
       let ud=moment(e.updatedAt).format("D MMMM Y");  //updated date
       var time=""
    

      if(moment(cd).isSame(ud)){
          time =  moment(e.updatedAt).format('h:mm a')
      }

      if(moment(cd).isAfter(ud)){
       time= moment(e.updatedAt).format("D MMM Y")
      }

      let lm= e.last_Message;
      lm=utils.strLength(lm,"ChatLM")
      
      let sd="";

      {allSup.map((d,i,a)=>{
        if(e.id2==d.id){
         sfn  =  d.FirstName || ""
         sd=d;
         sln  =  d.LastName || ""
         fsupn=sfn+" "+sln
         supn= sfn.charAt(0)+sln.charAt(0)
         fsupn= utils.strLength(fsupn,"chatTitle")
        }
      })
    }

      return(

        <View style={{marginTop:i==0?40:0,marginBottom:30,backgroundColor:"white" }}>
<TouchableOpacity onPress={()=>{onClickChat(sd,i)}}>
<Text style={{fontSize:11,right:7,top:5,position:"absolute"}}>{time}</Text>


<View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>

<View style={{marginLeft:10,marginRight:15,backgroundColor:"#007069",width:60,height:60,borderRadius:30,alignItems:"center",justifyContent:"center"}}>
     <Text style={{color:"white",fontSize:20,fontFamily:GVs.fontMedium,textTransform:"uppercase"}}>{supn}</Text>   
</View>

<View style={{marginLeft:0}}>
  <Text style={{fontSize:20,fontFamily:GVs.fontMedium}}>{fsupn}</Text>
  <Text>{lm}</Text>
</View>


</View>

<View style={{width:"80%",height:0.5,backgroundColor:"silver",opacity:0.5,marginTop:10,alignSelf:"center"}} />
</TouchableOpacity>
        </View>
      
      )
     })
     }  
  

  
  </ScrollView>
)}

 
   </View>
 
  );

}



