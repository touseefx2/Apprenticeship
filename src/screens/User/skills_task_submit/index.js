import React, { useState,useEffect,useRef} from 'react';
import {View,Image,Text ,FlatList, TouchableOpacity,Modal,AppState,ScrollView,BackHandler,Alert,ActivityIndicator} from 'react-native';
import {Button} from 'react-native-paper';
import utils from "../../../utils/index";
import GVs from '../../../store/Global_Var';
import GV from "./Global_Var"
import { styles } from './styles'; 
import Textarea from 'react-native-textarea';
import TrackPlayer   from 'react-native-track-player';
import VideoPlayer from 'react-native-video-controls';
import { CommonActions} from '@react-navigation/native';
import MultipleImagePicker from "@baronha/react-native-multiple-image-picker"; 
import FilePickerManager from "react-native-file-picker";
import ImagePicker from "react-native-customized-image-picker"; 
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { inject, observer } from "mobx-react"; 
import moment from "moment";
import Geolocation from   "@react-native-community/geolocation";
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackgroundTimer from 'react-native-background-timer';
import FileViewer from 'react-native-file-viewer';
import OpenFile from 'react-native-doc-viewer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Window } from '../../../themes/Window';
 
let photoTypes="image"
let videoTypes="video"

  function  Skills_Task_Submit  (props) {
  
  const {skillIndex,taskIndex,from}=props.route.params;
  const {skill,submitSkill,addObjinTaskWork,changeValueinTaskWork,user,addDataInSkill,changeDataInSkill,removeDataInSkill,resubmitDataInSkill} = props.store;
  const item =  skill[skillIndex].e.task[taskIndex]
  let rqr = item.require.toLowerCase()
  
 

  const [mv,setmv]=useState(false);    //fulll image render modal vs
  const [p,setp]=useState("");  //slectd photo uri
  const [spi,setspi]=useState(null);  //slectd photo index

  //text require obj
  const [text,settext]=useState("");
  const [document,setdocument]=useState("");
  // const [docname,setdocname]=useState(""); //for just show
  const [arrowdown,setarrowdown]=useState(false);
  const [cc,setcc]=useState(false) //for refresh

   //photo require obj
   const [photo,setphoto]=useState("");

   //audio require obj
   const [audio,setaudio]=useState("");
   const [play,setplay]=useState(false);
   const [pause,setpause]=useState(false);
   const [loader,setloader]=useState(true);
   const [loaderT,setloaderT]=useState(false);
   const [Totalduration,setTotalduration]=useState(0);
   const [Position,setPosition]=useState(0);
   const [Index,setIndex]=useState(""); //music knsa ha uska index
   
   let  interval = useRef(null);  // play audio duration 

   let  dinterval = useRef(null); //time duration second count

   const [appS, setappS] = useState("active");

    //video require obj
    const [video,setvideo]=useState("");

 
    const [vv ,setvv]=useState(false);   // feedback modal
  
   
    const [tplay,settplay]=useState(false);
    const [playwi,setplaywi]=useState("")

    const [dms,setdms]=useState("no");

  
 
   useEffect(()=>{
  
     if(play==true && pause==false){
      interval.current = setInterval(async () => {
      let position = await TrackPlayer.getPosition();
      if(position!==0){
        position=fancyTimeFormat(position)
      }
      setPosition(position)
    }, 1000); 
    
   }

     if(play== true && pause==true ){
       clearInterval(interval.current); 
      }

      if(play== false && pause==false){
        clearInterval(interval.current); 
       }

       if(play==false){
        clearInterval(interval.current); 
       }
       
 
  },[play,pause])

 const  getTotalTime=()=>{
 
    let now  =  moment(new Date()).format("DD/MM/YYYY HH:mm:ss");  // crnt time
    let then = ""
    let tms=0;
    let stime= ""; //spend time

    item.work.map((e,i,a)=>{
      if(e.E==""){
       then = moment(e.D).format("DD/MM/YYYY HH:mm:ss"); 
      }
      else{
       tms=tms+e.hours
      }
    })

    var oms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));


    let ms  = moment.duration(oms+tms);

   if(ms.hours()<=0 && ms.minutes()<=0){
     stime= ms.seconds()+" Seconds"
   }else
   if(ms.hours()<=0){
     stime= ms.minutes()+" Min "+": "+ms.seconds()+" Sec"
   }
 else{
     stime=ms.hours() +" H " + ': ' + ms.minutes()+" M "+": "+ms.seconds()+" S"
   }

   setdms(stime)
   setloader(false)

  }
  
  useEffect(()=>{
    if(tplay==true){
      dinterval.current = BackgroundTimer.setInterval(() => {
      getTotalTime();
      },1000 ); 
    }

    if(tplay==false){
      BackgroundTimer.clearInterval(dinterval.current);
    }

    return () => {
      // Anything in here is fired on component unmount.
      BackgroundTimer.clearInterval(dinterval.current);
  }

  },[tplay])

  useEffect(()=>{

  if(Position!==0 && Totalduration!=0){

 if(Position==Totalduration)
   {
    try {
     musicStop(Index)
    } catch (e) {
        console.log(`cannot resume the sound file`, e)
    }
  } 

    }
  
 },[Position,Totalduration])
 
  useEffect(  ()=>{
    //it is compnnt did updt
 
  if(vv==false){ //update me bar bar set kr dta tha to us k vsbl k false me chlaen gy fedback modal ye
    if(photo.length<=0){setphoto("")}
    if(document.length<=0){setdocument("")}
    if(audio.length<=0){setaudio("") }
    if(video.length<=0){setvideo("") }
  }  

  console.log("item ",item)

 console.log("item data ",item.data)
 
 console.log("doc ",document)

     if(appS=="background" || appS=="inactive"){
      if(Index!==""){
        musicStop(Index)
      }
    }

  })

  function handleBackButtonClick() {
    if(mv==true){
      setmv(false);setp("");setspi(null)
      return true;
    }else{
      props.navigation.goBack();
      return true;
    }
   
  }


  useEffect(() => {
    // Anything in here is fired on component mount.
    AppState.addEventListener("change", _handleAppStateChange);
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
     checkIsTimeStop();
    return () => {

        // Anything in here is fired on component unmount.

        let c=false
        if(item.data.length>0){
          item.data.map((e,i,a)=>{
           if(e.play || !e.play){
             c==true
           }
          })
        }

       if((item.data.length>0 && c)|| audio.length>0){
        dynamicresetarr();
       }
       if((item.data.length>0 && c )|| video.length>0){
        dynamicresetVideoarr();
       }
       
       
        TrackPlayer.destroy();
        AppState.removeEventListener("change", _handleAppStateChange);
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    }

}, [])
 
const  storeUserSkillData = async (value) => {
  try {
    await AsyncStorage.setItem('userSkillData', JSON.stringify(value))
    console.log("store user skill data success : ")
  } catch (e) {
    console.log("store user skill data error : ", e)
  }
}

const locationEnabler=(p)=>{

  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  }).then((data) => {

       console.log("location enabler then : ",data)
        getCurrentLocation(p)
      // The user has accepted to enable the location services
      // data can be :
      //  - "already-enabled" if the location services has been already enabled
      //  - "enabled" if user has clicked on OK button in the popup
    }).catch((err) => {
console.log("location enabler popup error : ",err)
 let msg="";
if(tplay)
msg="Please Turn On Location for stop time !"
else
msg="Please Turn On Location for start time !"

utils.ToastAndroid.ToastAndroid_LB(msg)

      // The user has not accepted to enable the location services or something went wrong during the process
      // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
      // codes :
      //  - ERR00 : The user has clicked on Cancel button in the popup
      //  - ERR01 : If the Settings change are unavailable
      //  - ERR02 : If the popup has failed to open
      //  - ERR03 : Internal error
    });
}

const getCurrentLocation =async  (p)=>{
 
  setloaderT(true)

    Geolocation.getCurrentPosition(
    (position) => {
    console.log("geo location then  : ",position);
    setTime(p,position.coords.longitude,position.coords.latitude)
    setloaderT(false)
    },
    (error) => {
      setloaderT(false)
      console.log("geo location error : ",error)

      if(error.code==3){
        utils.ToastAndroid.ToastAndroid_LB("Location Request Timeout")
      }

      if(error.code==2){
        locationEnabler(p)
      }

      // if(error.message=="No location provider available."){
      //   
      //   }

      //   if(error.message=="Location settings are not satisfied."){
      //     let msg="";
      //     if(tplay)
      //     msg="Please Turn On Location for stop time !"
      //     else
      //     msg="Please Turn On Location for start time !"
          
      //     utils.ToastAndroid.ToastAndroid_LB(msg)
      //   }
 

    },
    { 
      accuracy: {
        android: 'high',
        ios: 'best',
      },
        enableHighAccuracy: true,
        timeout: 40000,
        maximumAge: 30000,
      // forceRequestLocation: true,
      // forceLocationManager: true,
      // showLocationDialog: true,  
    }
);

 
  
}  
 
const checkIsTimeStop=()=>{

  if(item.work.length>0) {
 
    let c=false;

       item.work.map((e,i,a)=>{
           if(e.E=="")
         {
          setloader(true);
          settplay(true);
          setplaywi(i);
          c=true
         }
    
       })

       if(!c){ setloader(false);}
     
      
     }else{
      setloader(false);
     }

  }

const setTime=(p,longitude,latitude)=>
{
settplay(p);

if(p==true){    
const d =  new Date(); 
const obj={D:d,E:"",hours:0,longitude,latitude}
addObjinTaskWork(skillIndex,taskIndex,obj)
utils.ToastAndroid.ToastAndroid_SB("Time Start")

const ob={skill:{skill},uid:user.id}
storeUserSkillData(ob)
}
 
if(p==false){

  if(item.work.length>0)
  {

    item.work.map((e,i,a)=>{

      if(e.E==""){

        const ed=  new Date()  //end date
         
       
        let now  =  moment(ed).format("DD/MM/YYYY HH:mm:ss");  // crnt time
        let then = moment(e.D).format("DD/MM/YYYY HH:mm:ss");

        var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
        // let t = moment.duration(ms);
 
         const obj={D:e.D,E:ed,hours:ms,longitude,latitude}
         changeValueinTaskWork(skillIndex,taskIndex,i,obj)
         utils.ToastAndroid.ToastAndroid_SB("Time Stop")
         const ob={skill:{skill},uid:user.id}
         storeUserSkillData(ob)
         setdms("no")
      }
    


    })
 
  } 
  
  }
 
}

const _handleAppStateChange = (nextAppState) => {
  console.log("apps : ",nextAppState)
   setappS(nextAppState)
}

const musicPlay=async (uri,name,index)=>{

  let title="Audio." 
  if(name){
   title= name.split(".")
   title=title[0]
  }
   
  const track = {
    url: uri, // Load media from the file system
    title: title,
    artist: 'hactric',
     // Load artwork from the file system:
    artwork: require("../../../assets/artwork.jpg"),
};


  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(track);    
  
  await  TrackPlayer.play();
   let duration = await TrackPlayer.getDuration() 

   while(duration==0)
   {
    duration = await TrackPlayer.getDuration()
   }

   
   if(duration!=0){
    duration =  fancyTimeFormat(duration) //cnvrt to mnutes
  } 

   console.log("dur : ",duration)
 
  dynamicMusicChecks("play",index)
  setIndex(index);
  setplay(true);
  setTotalduration(duration)


}

const musicPause=(index)=>{
  TrackPlayer.pause();
  setpause(true)
  setplay(true)
  dynamicMusicChecks("pause",index)
}

const musicResume=(index)=>{
  TrackPlayer.play()
  setpause(true)
  setpause(false)
  dynamicMusicChecks("resume",index)
}

const musicStop=(index)=>{
   TrackPlayer.destroy();
    dynamicMusicChecks("stop",index)
    setplay(false);
    setpause(false);
    clearInterval(interval.current); 
    setPosition(0)
    setTotalduration(0)
}

   function fancyTimeFormat(duration)
  {   
      // Hours, minutes and seconds
      var hrs = ~~(duration / 3600);
      var mins = ~~((duration % 3600) / 60);
      var secs = ~~duration % 60;
  
      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";
  
      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }
  
      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
  }

  const dynamicMusicChecks=(typ,index)=>{

 if(item.data.length<=0){
   
 if(typ=="play"){
    const arr = audio.map((obj, ii) =>
    ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:false }
      : {name: obj.name, uri: obj.uri ,play:false,pause:false}
  );
  setaudio(arr);
 }else  if(typ=="pause"){
  const arr = audio.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:true }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
setaudio(arr);
 }else  if(typ=="resume"){
  const arr = audio.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:false }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
setaudio(arr);
} else  if(typ=="stop"){
  const arr = audio.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:false,pause:false }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
setaudio(arr);
setIndex("")

}

}else{

  if(typ=="play"){
    const arr = item.data.map((obj, ii) =>
    ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:false }
      : {name: obj.name, uri: obj.uri ,play:false,pause:false}
  );
  changeDataInSkill(skillIndex,taskIndex,arr);

 }else  if(typ=="pause"){
  const arr = item.data.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:true }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
  changeDataInSkill(skillIndex,taskIndex,arr);
 }else  if(typ=="resume"){
  const arr = item.data.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:false }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
changeDataInSkill(skillIndex,taskIndex,arr);
} else  if(typ=="stop"){
  const arr = item.data.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:false,pause:false }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
changeDataInSkill(skillIndex,taskIndex,arr);
setIndex("")

}

}
 
 
  }
 
  const dynamicresetarr=()=>{
 
    if(item.length<=0){
 const arr = audio.map((obj, ii) =>
    ii === "null" ? {name: obj.name, uri: obj.uri ,play:false,pause:false }
      : {name: obj.name, uri: obj.uri ,play:false,pause:false}
  );
  setaudio(arr);
    }else{
      const arr = item.data.map((obj, ii) =>
      ii === "null" ? {name: obj.name, uri: obj.uri ,play:false,pause:false }
        : {name: obj.name, uri: obj.uri ,play:false,pause:false}
    );
    changeDataInSkill(skillIndex,taskIndex,arr)
    }

  
  }

  const dynamicresetVideoarr=()=>{
 
    if(item.length<=0){
 const arr = video.map((obj, ii) =>
    ii === "null" ? {name: obj.name, uri: obj.uri ,play:false,pause:false }
      : {name: obj.name, uri: obj.uri ,play:false,pause:false}
  );
  setaudio(arr);
    }else{
      const arr = item.data.map((obj, ii) =>
      ii === "null" ? {name: obj.name, uri: obj.uri ,play:false,pause:false }
        : {name: obj.name, uri: obj.uri ,play:false,pause:false}
    );
    changeDataInSkill(skillIndex,taskIndex,arr)
    }

  
  }

  const music= async (typ,uri,name,index)=>{
   
if(typ=="play"){
  try {
    musicPlay(uri,name,index)
} catch (e) {
    console.log(`cannot play the sound file`, e)
}
}
if(typ=="pause"){
  try {
  musicPause(index)
  } catch (e) {
      console.log(`cannot pause the sound file`, e)
  }
}
if(typ=="resume"){
  try {
  musicResume(index)
  } catch (e) {
      console.log(`cannot resume the sound file`, e)
  }
}
if(typ=="stop"){
  try {
    musicStop(index)
  } catch (e) {
      console.log(`cannot resume the sound file`, e)
  }
}
 
  }

  const dynamicVideoChecks=(index)=>{
 
    if(item.data.length<=0){
      const arr = video.map((obj, ii) =>
      ii === index ? {name: obj.name, uri: obj.uri ,play:!obj.play,pause:false }
        : {name: obj.name, uri: obj.uri ,play:false,pause:false}
    );
    setvideo(arr);
    }else{
      const arr = item.data.map((obj, ii) =>
      ii === index ? {name: obj.name, uri: obj.uri ,play:!obj.play,pause:false }
        : {name: obj.name, uri: obj.uri ,play:false,pause:false}
    );
    changeDataInSkill(skillIndex,taskIndex,arr);
    }
      
    
 
  }
  
  const  UploadDocumentClick=async ()=>{
    
    let typ=[];
    // if (rqr=="text"){typ=docTypes}
    // if (rqr=="audio"){typ=audioTypes}
    if (rqr=="photo"){typ=photoTypes}
    if (rqr=="video"){typ=videoTypes}

    // Pick a single file

  if(rqr=="text"){

    FilePickerManager.showFilePicker(null, (res ) => {
      console.log('Response = ', res );
     
      if (res.didCancel) {
        console.log('User cancelled file picker');
      }
      else if (res.error) {
        console.log('FilePickerManager Error: ', res.error);
      }
      else {

        let c=false;
      let ext=getFileExt(res.fileName)
      const extnsn=[".doc",".docx",".pdf",".plainText",".ppt",".pptx",".csv",".xls",".xlsx"]
      extnsn.map((d)=>{
    
        if(ext==d){
         c=true
        }
      })

      if(c){
    
        if(document!="" || item.data.length>0 ){
                  let arr=document || item.data
                  const obj={uri:res.uri,name:res.fileName}
                  arr.push(obj)

                  if(item.data.length<=0){
                    setdocument(arr)       
                    setcc(!cc)
                   }else{
                      changeDataInSkill(skillIndex,taskIndex,arr)
                      setcc(!cc)
                   }

            

          }else{
            let arr=[]
          console.log('FilePickerManager res :  ', res );
          const obj={name:res.fileName,uri:res.uri}
          arr.push(obj)
          setdocument(arr)
        }

 
      }else{
        alert("File not Supported")
      }
 
      
  }
    });
 
  }
  else if(rqr=="audio"){
 
    FilePickerManager.showFilePicker(null, (res ) => {
      console.log('Response = ', res );
     
      if (res.didCancel) {
        console.log('User cancelled file picker');
      }
      else if (res.error) {
        console.log('FilePickerManager Error: ', res.error);
      }
      else {

 
       let c=false;
      let ext=getFileExt(res.fileName)
      const extnsn=['.3g2','.3gp','.aac',".adt",".adts",".aif",".aifc",".aiff",".asf",".au",".m3u",".m4a",".m4b",".mid",".midi",".mp2",".mp3",".mp4",".rmi",".snd ",".wav",".wax",".wma"]
      extnsn.map((d)=>{
        
        if(ext==d){
         c=true
        }
      })

      if(c){

        if(audio!="" || item.data.length>0 ){
                let arr=audio || item.data
                const obj={uri:res.uri,name:res.fileName,play:false,pause:false}
                arr.push(obj)

                
       if(item.data.length<=0){
        setaudio(arr)  
        dynamicresetarr() 
        setcc(!cc)
       }else{
          changeDataInSkill(skillIndex,taskIndex,arr)
          dynamicresetarr() 
          setcc(!cc)
       }

               
        }else{
          let arr=[]
        console.log('FilePickerManager res :  ', res );
        const obj={name:res.fileName,uri:res.uri,play:false,pause:false}
        arr.push(obj)
        setaudio(arr)
       
      }
      
      }else{
   
        alert("File not Supported")
      }
 
      
  }
    });
 

  } 
  else if(rqr=="photo"){

    if(GVs.api<29){ //29 is andrd 10

      try {
      
        ImagePicker.openPicker({
          multiple: true,
          maxSize:10,
          imageLoader:"UNIVERSAL"
        }).then(res => {
           

          if(photo!="" || item.data.length>0 )
          {
            let arr=photo || item.data
            res.map((e,i,a)=>{
              const obj={name:e.fileName||"",uri:e.path}
             arr.push(obj)
           }) 

           if(item.data.length<=0){
            setphoto(arr)   
            setcc(!cc)
           }else{
              changeDataInSkill(skillIndex,taskIndex,arr)
              setcc(!cc)
           }
                
          }
          else
          {
            let arr=[]
            res.map((e,i,a)=>{
              const obj={name:e.fileName||"",uri:e.path}
              arr.push(obj)
            }) 
            setphoto(arr)
          }


        });
      

      } catch (error) {
        console.log("photo picker imgepckr error : ",error)
      }

    }else{
       try {
     let options = {
      mediaType:photoTypes,
      isPreview:false,
      maxSelectedAssets:10
      
                   };

    const res = await MultipleImagePicker.openPicker(options);
    console.log("res : ",res)
    if(res){


      if(photo!="" || item.data.length>0)
      {
        let arr=photo || item.data
        res.map((e,i,a)=>{
         const obj={name:e.fileName,uri:e.path}
         arr.push(obj)
       }) 

       if(item.data.length<=0){
        setphoto(arr)   
        setcc(!cc)
       }else{
        
          changeDataInSkill(skillIndex,taskIndex,arr)
          setcc(!cc)
       }
             
           
      }
      else
      {
        let arr=[]
        res.map((e,i,a)=>{
          const obj={name:e.fileName,uri:e.path}
          arr.push(obj)
        }) 
        setphoto(arr)
      }

    }

    } catch (error) {
      console.log("photo picker error : ",error)
    } 
    }
    
  }
  else if(rqr=="video"){
    try {
     let options = {
      mediaType:videoTypes,
      isPreview:false,
      maxSelectedAssets:2
      };

    const res = await MultipleImagePicker.openPicker(options);
    console.log("res : ",res)
    if(res){


      if(video!="" || item.data.length>0)
      {
        let arr= video || item.data
        res.map((e,i,a)=>{
          const obj={name:e.fileName,uri:e.path,play:false,pause:false}
         arr.push(obj)
       }) 

       if(item.data.length<=0){
        setvideo(arr)  
        setcc(!cc)
       }else{
          changeDataInSkill(skillIndex,taskIndex,arr)
          setcc(!cc)
       }

    
      }
      else { 
        let arr=[]
        res.map((e,i,a)=>{
          const obj={name:e.fileName,uri:e.path,play:false,pause:false}
          arr.push(obj)
        }) 
      setvideo(arr)
      
      }

    }

    } catch (error) {
      console.log("photo picker error : ",error)
    } 
  }


  }

  const onsubmit=()=>{
   
    if(!tplay){
      if(item.result==null && item.submit==false){
        submitSkill(skillIndex,taskIndex,true)
      }
  
      if(item.result==false && item.submit==true){
   
        let t=true;
        let r=null;
        resubmitDataInSkill(skillIndex,taskIndex,t,r)
      }
      
     
        var  data=[];
        if((document!=""&&text=="")&&item.data.length<=0){data= document}
        else if((text!=""&&document=="")&&item.data.length<=0){data.push({"text":text})}
        else if((document!=""&&text!="")&&item.data.length<=0)
        { 
          document.map((e,i,a)=>{
            console.log("e : ",e)
             data.push(e)
          })
           data.push({"text":text})
        }
        else if((document==""&&text=="")&& item.data.length>0){data=item.data}
        else if((document==""&&text!="")&& item.data.length>0){
   
          item.data.map((e,i,a)=>{
            if(e.text!=""){
             data.push(e)
            }     
          })
  
          data.push({"text":text})
  
  
        }
        else if(photo!=""||item.data.length>0){data=photo || item.data}
        else if(audio!=""||item.data.length>0){data=audio || item.data}
        else if(video!=""||item.data.length>0){data=video || item.data}
       
    
      

        addDataInSkill(skillIndex,taskIndex,data)

        console.log("skill after chnge data ",skill[skillIndex].e.task[taskIndex].data)
        
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{ name:from=="home"?"Home":"Skill" }]
      });
  
        props.navigation.dispatch(resetAction); 
    }

    if(tplay){
    utils.AlertMessage("","Please stop time first")
    }

 
  }

 const  emptyFields= ()=> 
{
  if(rqr=="text"){
    if(text=="" && document=="" ){
      return true;
    } else{
      return false;
    }
  }else if(rqr=="photo" ){
    if( photo=="" || photo.length>10   ){
      return true;
    } else{
      return false;
    }
  }else if(rqr=="audio" ){
    if( audio=="" || audio.length>2 ){
      return true;
    } else{
      return false;
    }
  }else if(rqr=="video" ){
    if( video=="" || video.length>2   ){
      return true;
    } else{
      return false;
    }
  }
  
}
 
const  emptyFieldsStore= ()=> 
{
 
  if(item.require!="Text"){

    if(item.require=="Photo"){
      if(item.data.length<=0 || item.data.length > 10){
        return true;
      } else{
        return false;
      }
    }else
    {
      if(item.data.length<=0 || item.data.length > 2){
        return true;
      } else{
        return false;
      }

    }
  

  }else{
    if(item.data.length<=0 || item.data.length>3){
      return true;
    } else{
      return false;
    }
  }

   
   
  
}
 
const getFileExt=(filename)=>{

  return filename.substring(filename.lastIndexOf("."));
}
  
const removePhoto=(i)=>{
  if(item.data.length<=0){
    if (i > -1) {
      photo.splice(i, 1);
      setmv(!mv);setspi(null);setp("");setcc(!cc)
    }
  }else{
    if (i > -1) {
      removeDataInSkill(skillIndex,taskIndex,i)
      setmv(!mv);setspi(null);setp("");setcc(!cc)
    }
  }
}

const removeAudio=(i)=>{
  if(item.data.length<=0){
    if (i > -1) {
      audio.splice(i, 1);
      //console.log("photo dlt : ",photo)
      setcc(!cc)
    }
  }else{
    if (i > -1) {
      removeDataInSkill(skillIndex,taskIndex,i)
      // //console.log("photo dlt : ",photo)
      // setcc(!cc)
    }
  }
}

const removeDocument=(i)=>{
  if(item.data.length<=0){
    if (i > -1) {
      document.splice(i, 1);
      //console.log("photo dlt : ",photo)
      setcc(!cc)
    }
  }else{
    if (i > -1) {
      removeDataInSkill(skillIndex,taskIndex,i)
      // //console.log("photo dlt : ",photo)
      // setcc(!cc)
    }
  }
}

const removeVideo=(i)=>{
  if(item.data.length<=0){
    if (i > -1) {
      video.splice(i, 1);
      //console.log("photo dlt : ",photo)
      setcc(!cc)
    }
  }else{
    if (i > -1) {
      removeDataInSkill(skillIndex,taskIndex,i)
      // //console.log("photo dlt : ",photo)
      // setcc(!cc)
    }
  }
 
}

 const renderSubmitButton=(t,height3)=>{
    let c= true;

    if((item.result==false&& item.submit==true)){
        c=false
    }

    if(item.data.length<=0){
      c=emptyFields()
    }else{
      c=emptyFieldsStore()
    }
 
   
  let style=null
  
    style={alignSelf:"center",height:hp(height3),alignItems:"center",justifyContent:"center"}
  
   return(
<View style={style}>

<Button  disabled={( ((item.result==null&&item.submit==false) || (item.result==false&&item.submit==true))  && !c )?false:true}    mode="contained"  labelStyle={[styles.button1Text,{color:"white"}]} color={"#007069"} style={styles.button1}    onPress={()=>{
  Alert.alert(
    "Confirmation",
    "Do you want to confim submit this task ",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () =>   onsubmit() }
    ]
  );
  
}}>
Submit  
</Button>

{item.submit&&item.result==false &&(
  <Button      mode="contained"  labelStyle={[styles.button1Text,{color:"white"}]} color={"#007069"} style={[styles.button1,{marginTop:10}]}    onPress={()=>{
    Alert.alert(
      "Feedback",
      t,
      [
         
        { text: "OK", onPress: () =>  {} }
      ]
    );
  
  }}>
 View Supervisor Feedback 
  </Button>

)}
 

</View>
   )
  } 
  
  const renderTextOption=()=>{
 
    let dt=""
    let chk=false;
    if(item.data.length>0){
      item.data.map((e,i,a)=>{
       let c="";
       c=e.text || ""
       if(c!=""){
         dt=e.text;
       }else{
         chk=true
       }
      })
    }
    


    return(
      <View style={{ margin:5,padding:15,marginBottom:10,flex:1}}>

{((item.result==null&&item.submit==false)||(item.result==false&&item.submit==true))&&(
  <TouchableOpacity   onPress={()=>UploadDocumentClick()} >
<View style={{justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
<Image source={require("../../../assets/document.png")} style={styles.documentImage} />
<Text style={[styles.textD,{textTransform:"capitalize"}]}>Upload Document</Text>
</View>
</TouchableOpacity>

 )}

{(document!="" || (item.data.length>0 && chk )) && (
       
          <FlatList
           numColumns={1}
           data={ item.data.length>0?item.data:document}
           style={{marginTop:10}}
          //  extraData={FlatListR} //true/fasle
           renderItem={renderDocument}
           keyExtractor={(item, index) => { return index.toString() }}
           showsVerticalScrollIndicator={true}
         />
     
    )}   
    
  

 

<View   onPress={()=>setarrowdown(!arrowdown)} style={{borderColor:"#007069",borderWidth:1,borderRadius:4,padding:3,marginTop:10}}>

  
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:5}}>
<Text style={{color:"#007069",fontSize:15}}>Text</Text>
<TouchableOpacity     onPress={()=>setarrowdown(!arrowdown)} > 
<utils.vectorIcon.AntDesign name={!arrowdown?"arrowdown":"arrowup"} size={20}  color="#007069" />
</TouchableOpacity>
</View>

{arrowdown &&(
  <View>
    {(dt!="" ||  dt=="" &&((item.submit==true&&item.result==true)||(item.submit==true&&item.result==null)))?(
  <View style={{flex:1,backgroundColor:'#828282',alignSelf:"center",padding:5,width:270}}> 
<Text style={{  fontSize: 15, color: 'white'}}>
{dt==""?"Empty":dt}
</Text>
</View>

    ):(
   <Textarea
   containerStyle={styles.textareaContainer}
   style={styles.textarea}
   onChangeText={(t)=>settext(t)}
   defaultValue={dt||text}
  // maxLength={100000}
   placeholder={(item.result==null&&item.submit==false)?"Enter Here":dt==""?"Enter Here":"Empty"}
   placeholderTextColor={'white'}
   underlineColorAndroid={'transparent'}
 />
    )}
   
 </View>
)}
 
</View>
 
 
      </View>
    )
  }

  const renderPhotoOption=()=>{

  
    return(
        <View style={{margin:5,padding:15,marginBottom:10}}>
  
  {((item.result==null&&item.submit==false)||(item.result==false&&item.submit==true))&&(
  <TouchableOpacity   onPress={()=>UploadDocumentClick()}>
  <View style={{justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
  <Image source={require("../../../assets/photo.png")} style={styles.documentImage} />
  <Text style={[styles.textD,{textTransform:"capitalize"}]}>Upload Photo</Text>
  </View>
  </TouchableOpacity>
  )}

  {(photo!="" || item.data.length>0) && (
  
         <FlatList
         numColumns={3}
         data={ item.data.length>0?item.data:photo}
        //  extraData={FlatListR} //true/fasle
         renderItem={renderPhoto}
         keyExtractor={(item, index) => { return index.toString() }}
         showsVerticalScrollIndicator={true}
       />
    
  )}   
  
 

 
        </View>
      )
    }

    const renderAudioOption=()=>{
 
      return(
          <View style={{marginBottom:10,margin:5,padding:15}}>
     
     {((item.result==null&&item.submit==false)||(item.result==false&&item.submit==true))&&(
    <TouchableOpacity   onPress={()=>UploadDocumentClick()}>
    <View style={{justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
    <Image source={require("../../../assets/audio.png")} style={styles.documentImage} />
    <Text style={[styles.textD,{textTransform:"capitalize"}]}>Upload Audio</Text>
    </View>
    </TouchableOpacity>
     )}
     
    {(audio!="" || item.data.length>0) && (
       
 
           <FlatList
           numColumns={1}
           data={ item.data.length>0?item.data:audio}
           style={{marginTop:10}}
          //  extraData={FlatListR} //true/fasle
           renderItem={renderAudio}
           keyExtractor={(item, index) => { return index.toString() }}
           showsVerticalScrollIndicator={true}
         />
       
    )}   
    
  
  
   
          </View>
        )
      }

      const renderVideoOption=()=>{

        return(
            <View style={{marginBottom:10,margin:5,padding:15}}>
      {((item.result==null&&item.submit==false)||(item.result==false&&item.submit==true))&&(
      <TouchableOpacity   onPress={()=>UploadDocumentClick()}>
      <View style={{justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
      <Image source={require("../../../assets/video.png")} style={styles.documentImage} />
      <Text style={[styles.textD,{textTransform:"capitalize"}]}>Upload Video</Text>
      </View>
      </TouchableOpacity>
      )}
       
      {(video!="" || item.data.length>0) && (
       
             <FlatList
             numColumns={1}
             data={ item.data.length>0?item.data:video}
             scrollEnabled={true}
            //  extraData={FlatListR} //true/fasle
             renderItem={renderVideo}
             keyExtractor={(item, index) => { return index.toString() }}
             showsVerticalScrollIndicator={false}
           />
      
      )}   
      
    
            </View>
          )
        }
  
        const renderFullImage=( )=>{
          const i =  skill[skillIndex].e.task[taskIndex]
          return(
            <Modal
            animationType='fade'
            visible={mv}
            >
        
      
        <View style={{flex: 1,backgroundColor:"black"}}>
           
           <Image style={{position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,}} resizeMode="contain"   source={{uri:p}}  />   
        
      
   
  <View style={{width:"100%",flexDirection:"row",alignItems:"center",position:"absolute",top:5,padding:5,paddingLeft:20}}>

  <TouchableOpacity  
  onPress={()=>{setmv(!mv);setp("");setspi(null)}}
  style={{backgroundColor:"black",borderRadius:25,}}>
          <utils.vectorIcon.Ionicons  name="arrow-back" color="white" size={25} />
  </TouchableOpacity> 
  
  { ( (i.result==null&&i.submit==false) || (i.result==false&&i.submit==true)  )&&(
   <TouchableOpacity  
onPress={()=>{removePhoto(spi)}}
style={{backgroundColor:"black",borderRadius:25,marginLeft:35}}>
  <utils.vectorIcon.AntDesign  name="delete" color="white" size={25} />
</TouchableOpacity>
 )}



</View>
   
            </View>
        
        
          </Modal>
        )
  
  
        }

       const renderPhoto=({item,index})=>{
return(
<TouchableOpacity  onPress={()=>{setp(item.uri);setspi(index);setmv(true)}} style={[styles.taskBox,{marginTop:15,marginBottom:15}]} >

<Image source={{uri: item.uri}}   style={styles.photo}  />
 

</TouchableOpacity>
 )
     
      }

      const renderAudio=({item,index})=>{

      let play=item.play;
      let pause=item.pause;

      const i =  skill[skillIndex].e.task[taskIndex]

        return(
        <View style={[styles.taskBox,{marginTop:15,marginBottom:15,alignItems:"center"}]} >
         
  <View style={{flexDirection:"row",alignItems:"center",alignSelf:"center",flex:1}}>

<View style={{backgroundColor:"#dbdbdb",borderRadius:10,padding:7,flexDirection:"row",alignItems:"center",width:200}} >


 
<utils.vectorIcon.FontAwesome size={26} color="green"   name="music" />
{play==true&& <Text style={{fontSize:12,marginTop:5,marginLeft:5}}>{Position}</Text>}
 

 
<View style={{position:"absolute",right:0}}>

{(play==false ) &&(
 <TouchableOpacity onPress={()=>{music("play",item.uri,item.name,index)}}>
 <utils.vectorIcon.Entypo  size={27} color="#de8921"   name="controller-play" />
</TouchableOpacity>
)}


{play==true && (
 
  <View style={{flexDirection:"row",alignItems:"center"}}>
   <Text style={{fontSize:12,marginTop:5,marginRight:5}}>{Totalduration}</Text>

   {pause==false&&( 
   <TouchableOpacity onPress={()=>{music("pause",item.uri,"",index)}}>
   <utils.vectorIcon.AntDesign  style={{marginRight:7}} size={26} color="#de8921"   name="pausecircle" />
   </TouchableOpacity>
   )}



{pause==true &&( 
   <TouchableOpacity onPress={()=>{music("resume",item.uri,"",index)}}>
   <utils.vectorIcon.Entypo  size={26} color="#de8921"   name="controller-play" />
   </TouchableOpacity>
   )}

<TouchableOpacity onPress={()=>{music("stop",item.uri,"",index)}}>
 <utils.vectorIcon.Entypo   size={26} color="red"   name="controller-stop" />
</TouchableOpacity>

</View>

 

)}
  

 

 </View>

</View>

{ ( (i.result==null&&i.submit==false) || (i.result==false&&i.submit==true)  )&&(
<View style={{marginLeft:10}} >
        <TouchableOpacity onPress={()=>{removeAudio(index)}}>
        <utils.vectorIcon.AntDesign size={20} color="#de5050" style={{opacity:0.7}} name="delete" />
        </TouchableOpacity>
        </View>
)}

</View>

 
        </View>
         ) }

         const renderDocument=({item,index})=>{


          console.log("item : ",item)

          let c="";

          c= item.text || ""

          if(c==""){

            let docname=item.name  || "";
            let ext= "";
        
           var d = JSON.stringify(docname).split(".")
           docname =d[0]
           docname= utils.strLength(docname,"docname")
            ext=d[1]
        
           let dname=docname+" ."+ext
           dname=dname.replace(/"/g, '')
         
           const i =  skill[skillIndex].e.task[taskIndex]
  
              return(
   <View style={[styles.taskBox,{marginTop:index==0?10:0,marginBottom:10,alignItems:"center"}]} >
               
    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}> 
  
  <TouchableOpacity
   onPress={()=>{
    FileViewer.open(item.uri)
    .then(() => {
        console.log("file open succes")
    })
    .catch(error => {

      console.log("file open  not succes : ",error)
    
      OpenFile.openDoc([{
        url:item.uri, // Local "file://" + filepath
        fileName:"",
        cache:false,
        fileType:ext
      },setloader(true)], (error, url) => {
         if (error) {
           console.error(error);
           setloader(false);
         } else {
           console.log(url)
           setloader(false)
         }
       })
    
    });
  }}  style={{width:150,height:35,backgroundColor:"#15756c",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
  <Text style={{textTransform:"capitalize",color:"white",fontSize:14}}>{dname}</Text>
  </TouchableOpacity >
  
  
  { ( (i.result==null&&i.submit==false) || (i.result==false&&i.submit==true)  )&&(
    <View>
  <TouchableOpacity onPress={()=>removeDocument(index)}>
  <utils.vectorIcon.Entypo size={30} color="#de5050" style={{opacity:0.8}} name="cross" />
  </TouchableOpacity>
  </View>
  )}
  </View>
  </View>
  
    )

          }
 

}
                  
         const renderPlayVideo=(uri,index)=>{
  

            return(
  
    <View style={{width:250,height:200}}>
  
      <VideoPlayer
  source={{uri:uri}}
  navigator={null}
  toggleResizeModeOnFullscreen={true}
  controlTimeout={4500}
  onEnd={()=>{dynamicVideoChecks(index)}}
/>
   
    <TouchableOpacity onPress={()=>{dynamicVideoChecks(index)}}>
      <Text style={{fontSize:16,color:"red",alignSelf:"center"}}>close</Text>
    </TouchableOpacity>

      </View>

 
             ) }

         const renderVideo=({item,index})=>{

          let name=item.name || "Video.mp4";
          let title="";
          let play=item.play;
 
          
          if(name.indexOf('.') !== -1){
            let ext= getFileExt(name);
            let t= name.split(".")
             name=t[0]
             name= utils.strLength(name,"videoname");
             title= name+" ."+ext
          }else{
            title="Video.mp4"
          }
          const i =  skill[skillIndex].e.task[taskIndex]
 
            return(
         

      <View style={{flexDirection:"row",alignItems:"center",alignSelf:"center",marginTop:index==0?30:15}}>
    
  {!play && (
 <TouchableOpacity onPress={()=>{dynamicVideoChecks(index)}}>
 <View style={{backgroundColor:"#15756c",borderRadius:10,padding:7,flexDirection:"row",alignItems:"center",width:180,flexDirection:"row"}} >
<utils.vectorIcon.Foundation name="play-video" color="yellow" size={30} />
<Text style={{fontSize:13,color:"white",marginLeft:10}}>{title}</Text>
 </View>
 </TouchableOpacity>
   
  )} 
 
 {play && renderPlayVideo(item.uri,index)}

 { ( (i.result==null&&i.submit==false) || (i.result==false&&i.submit==true)  )&&(
    <View style={{marginLeft:10}} >
            <TouchableOpacity onPress={()=>{removeVideo(index)}}>
            <utils.vectorIcon.AntDesign size={20} color="#de5050" style={{opacity:0.7}} name="delete" />
            </TouchableOpacity>
            </View>
)}

      </View>
     
      
             ) }
   
         const renderTimer = ()=>{
           return(
        
        <View  style={styles.timeBox}>     
    
        <View  style={styles.timerCard}> 
            
         <TouchableOpacity disabled={ ((item.result==null&&item.submit==false) || (item.result==false&&item.submit==true))  ?false:true}     onPress={()=>{getCurrentLocation(!tplay?true:false)}}>   
       <utils.vectorIcon.MaterialIcons name="timer" color={ (!tplay&&(((item.result==null&&item.submit==false) || (item.result==false&&item.submit==true)))) ?"green": (tplay&&(item.result==null&&item.submit==false)||(item.result==false&&item.submit==true))?"red":"#9B9B9B"} size={35}/>
       </TouchableOpacity>
           
            
             </View>
        </View>
        
        )
           }

           const renderCheckLimit=(l)=>{
             return(
               <View>
              {item.require=="Audio" && ((audio!=""&&audio.length>2) || (item.data.length>0 && item.data.length>2)) &&(
       
                <Text style={{textTransform:"capitalize",color:"red",fontSize:11,marginLeft:5}}>max 2 audio Submit</Text>
                
              )} 
                {item.require=="Text" && ((document!=""&&document.length>2) || (l>0 && l>2)) &&(
            
            <Text style={{textTransform:"capitalize",color:"red",fontSize:11,marginLeft:5}}>max 2 document Submit</Text>
                
              )}
             {item.require=="Video" && ( (video!=""&&video.length>2) || (item.data.length>0 && item.data.length>2)) &&(
       
              <Text style={{textTransform:"capitalize",color:"red",fontSize:13}}>max 2 videoSubmit</Text>
                  
                )}
                 {item.require=="Photo" && ( (photo!=""&&photo.length>10) || (item.data.length>0 && item.data.length>10) ) &&(
          
          <Text style={{textTransform:"capitalize",color:"red",fontSize:13}}>max 10 Photo Submit</Text>
              
            )}
            </View>
             )
           }

           const loderTimer=()=>{
            return(
              <Modal
              animationType='fade'
              transparent={true}
              visible={loaderT}
              >
          
              <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
            
            <Text style={{fontSize:14,color:"white"}}>Getting Current Location ......</Text>
              <ActivityIndicator
               size='large'
               color={"#307ecc"}
              />
          
              </View>
          
            </Modal>
          )
           }

   
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
  

       let stime= ""; //spend time
       let ms=0;
       item.work.map((e,i,a)=>{
         if(e.E!=""){
          ms=ms+e.hours
         }
       })
      ms= moment.duration(ms);

      if(ms.hours()<=0 && ms.minutes()<=0){
        stime= ms.seconds()+" Seconds"
      }else
      if(ms.hours()<=0){
        stime= ms.minutes()+" Min "+": "+ms.seconds()+" Sec"
      }
    else{
        stime=ms.hours() +" H " + ': ' + ms.minutes()+" M "+": "+ms.seconds()+" S"
      }
  

      let fb= item.submit&&item.result?"Approved" : 
      item.submit&&item.result==false?"Rejected" :
      item.submit&&item.result==null?"Pending" :""

 
      let r=0;
      let l=0;
      if(item.data.length>0){
        item.data.map((e,i,a)=>{
          let c="";
          c=e.text || ""
         if(c!=""){
           r++;
         } else{
           l++
         }
        })
      }
      let color="green"
      if(item.require=="Photo"){
      color= photo.length>10||item.data.length>10?"red":"green"
      }
      if(item.require=="Text"){
       color=document.length>2 || item.data.length>2+r?"red":"green"
      }
      if(item.require=="Audio"){
       color= audio.length>2||item.data.length>2?"red":"green"
      }
      if(item.require=="Video"){
        color=video.length>2||item.data.length>2?"red":"green"
      }
    

      let height1= null;
      let height2= null;
      let height3= null;

      if(item.submit==true && item.result==false){
        height1= Window.Height>710?"33%":"37%"
      }else if((item.submit==true && item.result==null) || (item.submit==true && item.result==true) ){
        height1= Window.Height>710?"33%":"37%"
      }else{
        height1= Window.Height>710?"30%":"34%"
      }


      if(item.submit==true && item.result==false){
        height2= Window.Height>710?"50%":"41%"
      }else if((item.submit==true && item.result==null) || (item.submit==true && item.result==true) ){
        height2= Window.Height>710?"59%":"46%"
      }else{
        height2= Window.Height>710?"61%":"52%"
      }
      

      if(item.submit==true && item.result==false){
        height3=Window.Height>710?"17%":"18%"
      }else if((item.submit==true && item.result==null) || (item.submit==true && item.result==true) ){
        height3= Window.Height>710?"8%":"13%"
      }else{
        height3= Window.Height>710?"9%":"10%"
      }
      


        return(
          <View style={{flex:1,backgroundColor:"white"}}>  

    <utils.Loader loader={loader} />
    {loderTimer()}

    <ScrollView>
     
     <View style={{height:hp(height1)}}>
    <View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
    <utils.Header  nav={props.navigation} type="stack"  />
    {renderTimer()}
    </View>
  
    
    <View style={{padding:7,margin:7}}>     
       <View style={{marginLeft:5}}> 
       <utils.HeaderTitle   message={item.name}  title="Submit Your Task" color={"#15756c"}  type="headertitle" />
       </View>
      
       <View style={{marginLeft:5,marginTop:15}}>
    
         <View style={{alignItems:"center",flexDirection:"row"}}> 
          <Text style={{color:"#9B9B9B",fontSize:12}}>Required Time</Text>
          <Text style={{color:"#15756c",fontSize:12,right:0,position:"absolute"}}>{t} {time}</Text>
          </View>
    
           <View style={{alignItems:"center",flexDirection:"row",marginTop:5}}> 
           <Text style={{color:"#9B9B9B",fontSize:12}}>Spend Time</Text>
           <Text style={{color:"#15756c",fontSize:12,right:0,position:"absolute"}}>{dms!="no"?dms:stime}</Text>
           <Text></Text>
           </View>


       {(item.submit!=false) &&(
 <View style={{alignItems:"center",flexDirection:"row",marginTop:5}}>
 <Text style={{textTransform:"capitalize",fontSize:12,fontFamily:GVs.fontMedium,alignSelf:"center",color:"#9B9B9B"}}>{fb}</Text>
 {(item.submit && item.result==true)?
   <utils.vectorIcon.FontAwesome name="check-circle" color={"#1CB703"}  style={{alignSelf:"center",right:0,position:"absolute"}} size={25}/>
   :
   (item.submit && item.result==null)?
  <utils.vectorIcon.FontAwesome5 name="ellipsis-h" color={"#FDCC0D"}  style={{alignSelf:"center",right:0,position:"absolute"}} size={25}/>
   :
   (item.submit && item.result==false)?
   (
   <TouchableOpacity style={{alignSelf:"center",right:0,position:"absolute"}} onPress={()=>{setvv(true)}} >
   <utils.vectorIcon.Entypo name="circle-with-cross" color={"#FF0000"}   size={25}/>
   </TouchableOpacity>
   )
    :null}
    </View>
       )}    
    
       </View>
       </View>
     
     
       </View>    
          
           {mv && renderFullImage()}
           
           <View style={{height:hp(height2),borderColor:color,borderWidth:0.5,width:wp("90%"),alignSelf:"center",borderRadius:4}}>
           <ScrollView showsVerticalScrollIndicator={false}>
           {rqr=="text" && renderTextOption()}
           {rqr=="photo" && renderPhotoOption()}
           {rqr=="audio" && renderAudioOption()} 
           {rqr=="video" && renderVideoOption()}
           </ScrollView>
           {renderCheckLimit(l)}
           </View>
        
         
           {renderSubmitButton(item.feedback,height3)}

           </ScrollView>
         
         

    </View>
        )
    
}


export default  inject("store")(observer(Skills_Task_Submit));

 