import React, { useState,useEffect,useRef} from 'react';
import {View,Image,FlatList, TouchableOpacity,Modal,AppState, Animated,ScrollView,BackHandler,Alert} from 'react-native';
import {Button} from 'react-native-paper';
import utils from "../../../utils/index";
import { CommonActions } from  '@react-navigation/native';
import GVs from '../../../store/Global_Var';
import { Container, Content, Item, Input ,Text } from 'native-base';
import GV from "./Global_Var"
import {Window} from "../../../themes/Window/index";
import { styles } from './styles'; 
import Textarea from 'react-native-textarea';
import TrackPlayer   from 'react-native-track-player';
import VideoPlayer from 'react-native-video-controls'; 
import { inject, observer } from "mobx-react"; 
import moment from "moment";
import OpenFile from 'react-native-doc-viewer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
 
  function  Skills_Task_Submit  (props) {
  
  const {skillIndex,taskIndex,indexs,from}=props.route.params;
  const {allSkills,setAllSkills,submitSkill,submitAllSkill,addObjinTaskWork,changeValueinTaskWork,user,addDataInSkill,changeDataInSkill,changeDataInAllSkill,removeDataInSkill,resubmitDataInSkill} = props.store;
  const item =allSkills[indexs].s[skillIndex].task[taskIndex]
   
  let rqr = item.require.toLowerCase()
  
 

  const [mv,setmv]=useState(false);    //fulll image render modal vs
  const [p,setp]=useState("");  //slectd photo uri
  const [spi,setspi]=useState(null);  //slectd photo index

  //text require obj
  const [text,settext]=useState("");
 
  // const [docname,setdocname]=useState(""); //for just show
  const [arrowdown,setarrowdown]=useState(false);
  
   //audio require obj
 
   const [play,setplay]=useState(false);
   const [pause,setpause]=useState(false);
   const [loader,setloader]=useState(true);
   const [Totalduration,setTotalduration]=useState(0);
   const [Position,setPosition]=useState(0);
   const [Index,setIndex]=useState(""); //music knsa ha uska index
   
   let  interval = useRef(null);  // play audio duration 
 
   const [appS, setappS] = useState("active");

 

    const [vv ,setvv]=useState(false);   // reject modal
    const [vvv ,setvvv]=useState(false);   // fedbck modal
    const [fdb ,setfdb]=useState("");
    

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
  
   
      console.log("item : ",item)
 
    
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
 setTimeout(() => {
   setloader(false)
 }, 500);
    return () => {
        // Anything in here is fired on component unmount.
        TrackPlayer.destroy();
        AppState.removeEventListener("change", _handleAppStateChange);
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    }

}, [])
  
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
 
  if(typ=="play"){
    const arr = item.data.map((obj, ii) =>
    ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:false }
      : {name: obj.name, uri: obj.uri ,play:false,pause:false}
  );
  changeDataInAllSkill(indexs,skillIndex,taskIndex,arr);

 }else  if(typ=="pause"){
  const arr = item.data.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:true }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
changeDataInAllSkill(indexs,skillIndex,taskIndex,arr);
 }else  if(typ=="resume"){
  const arr = item.data.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:true,pause:false }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
changeDataInAllSkill(indexs,skillIndex,taskIndex,arr);
} else  if(typ=="stop"){
  const arr = item.data.map((obj, ii) =>
  ii === index ? {name: obj.name, uri: obj.uri ,play:false,pause:false }
    : {name: obj.name, uri: obj.uri ,play:false,pause:false }
);
changeDataInAllSkill(indexs,skillIndex,taskIndex,arr);
setIndex("")

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
  
      const arr = item.data.map((obj, ii) =>
      ii === index ? {name: obj.name, uri: obj.uri ,play:!obj.play,pause:false }
        : {name: obj.name, uri: obj.uri ,play:false,pause:false}
       );
     changeDataInAllSkill(indexs,skillIndex,taskIndex,arr);
   
  }
  
  const  updateAllSkillProgress=()=>{
    
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
  
 
    
        })
  
    }
   
  
      setAllSkills(allSkills)
      
    
  }

  const onsubmit=(r)=>{
    
    if(r=="reject"){
      submitAllSkill(indexs,skillIndex,taskIndex,fdb,false)
    }else{
      submitAllSkill(indexs,skillIndex,taskIndex,"",true)
      updateAllSkillProgress()
    }
    
      
    setv(false);setvv(false);
  
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name:from=="home"?"Hom":from=="submissions"?"Submission":"Student" }]
    });

      props.navigation.dispatch(resetAction); 
       
    
 
  }
  
const getFileExt=(filename)=>{

  return filename.substring(filename.lastIndexOf("."));
}
   
 const renderSubmitButton=()=>{
   
   
    
   return(
<View  style={{ justifyContent: 'flex-end',marginBottom: 15,alignSelf:"center",marginTop:15}}>
<Button  mode="contained"  labelStyle={[styles.button1Text,{color:"white"}]} color={"#007069"} style={styles.button1}      onPress={()=>{
  Alert.alert(
    "Confirmation",
    "Do you want to confim approve this task ",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () =>   onsubmit("approve") }
    ]
  );
  }}>
Approve
</Button>

<Button  mode="contained"  labelStyle={[styles.button1Text,{color:"white"}]} color="#d93d3d" style={[styles.button1,{marginTop:10}]}      onPress={()=>{setvv(true)}}>
Reject
</Button>
</View>
   )
  } 

  const renderfdbSubmitButton=(t)=>{
     

   return(
<View  style={{ justifyContent: 'flex-end',marginBottom: 15,alignSelf:"center",marginTop:15}}>
<Button  mode="contained"  labelStyle={[styles.button1Text,{color:"white"}]} color={"#007069"} style={styles.button1}     
 onPress={()=>{
 Alert.alert(
  "Feedback",
  t,
  [
     
    { text: "OK", onPress: ()=> {} }
  ]
);
  }}>
View Feedback
</Button>

</View>
   )
  } 
  
  const renderRejectSubmitModal=()=>{
    return(
    <Modal
    animationType='fade'
    transparent={true}
    onRequestClose={()=>{setvv(false)}}
    visible={vv}
  >
    <View style={{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center', alignItems: 'center'
    }}>

      <View style={{
        backgroundColor: '#fff', height: 260,
        width: 300,
        padding:30,
      }}>

        <Text style={{ fontSize: 20,fontFamily:GVs.fontBold}}>Confirmation</Text>

        <Text style={{ fontSize:17,color:"black",marginTop:10}}>Do you want to confim reject this task</Text>
 
 
           <Item style={{backgroundColor:"white",borderRadius:4,height:44,padding:5,marginTop:10,borderColor:"#007069"}} rounded>
            <Input  style={{color: "black",fontSize:16}}
            placeholder='Feedback' placeholderTextColor={"#686868"} value={fdb}    
             onChangeText={(txt)=>setfdb(txt)} />
            </Item>

   
      
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width:160,position:"absolute",bottom:10,right:10
          }}
        >
            
          <TouchableOpacity 
          onPress={() => {
            setvv(false);setfdb("") 
          }}
            style={{
              width: 60, height: 40,
              justifyContent: 'center', alignItems: 'center',
            }}
          >
            <Text style={{
              fontSize: 14,
              fontFamily:GVs.fontMedium,
              color: 'black'
            }} >CANCEL</Text>
          </TouchableOpacity>
       

          <TouchableOpacity onPress={() => {
                
                if(fdb==""){utils.AlertMessage("","Please enter feedback !")}else{
                    onsubmit("reject");
                }
              
          }}
            style={{
              width: 60,
              height: 40,
              justifyContent: 'center', alignItems: 'center',
            }}
          >
            <Text style={{
              fontSize: 14,
              fontFamily:GVs.fontMedium,
              color: 'black'
            }}>OK</Text>
          </TouchableOpacity >

        </View>
      </View>
    </View>
  </Modal>
    )
  }
 
  const renderTextOption=()=>{
 
    let l=0;

    let dt=""
 
    if(item.data.length>0){
      item.data.map((e,i,a)=>{
       let c="";
       c=e.text || ""
       if(c!=""){
         dt=e.text; 
         l++;
       } 
      })
    }
    


    return(
      <View style={{ margin:5,padding:15,marginBottom:10,flex:1}}>

 
{( (item.data.length>0 )) && (
       
        
           <FlatList
           numColumns={1}
           data={item.data}
           style={{marginTop:10}}
          //  extraData={FlatListR} //true/fasle
           renderItem={renderDocument}
           keyExtractor={(item, index) => { return index.toString() }}
           showsVerticalScrollIndicator={true}
         />
      
    )}   
 
 
<View   onPress={()=>setarrowdown(!arrowdown)} style={{borderColor:"#007069",borderWidth:1,borderRadius:4,padding:3,marginTop:10,width:Window.Width-40,alignSelf:"center"}}>

  
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:5}}>
<Text style={{color:"#007069",fontSize:15}}>Text</Text>
<TouchableOpacity     onPress={()=>setarrowdown(!arrowdown)} > 
<utils.vectorIcon.AntDesign name={!arrowdown?"arrowdown":"arrowup"} size={20}  color="#007069" />
</TouchableOpacity>
</View>

{arrowdown &&(
   
  <View style={{flex:1,backgroundColor:'#828282',alignSelf:"center",padding:5,width:Window.Width-50}}> 
<Text style={{  fontSize: 15, color: 'white'}}>
{dt==""?"Empty":dt}
</Text>
</View>

    )}
  
 
</View>
 
 
      </View>
    )
  }

  const renderPhotoOption=()=>{

  
    return(
        <View style={{margin:5,padding:15,marginBottom:10}}>
  
 

  {(item.data.length>0) && (
     
          <FlatList
         numColumns={3}
         data={item.data}
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
     
     
     
    {(item.data.length>0) && (
       
            <FlatList
           numColumns={1}
           data={ item.data }
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
    
      {( item.data.length>0) && (
         
              <FlatList
             numColumns={1}
             data={item.data}
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
          const i = allSkills[indexs].s[skillIndex].task[taskIndex]
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
        
      
   
  <View style={{backgroundColor:null,width:"100%",flexDirection:"row",alignItems:"center",position:"absolute",top:5,padding:5,paddingLeft:20}}>

  <TouchableOpacity  
  onPress={()=>{setmv(!mv);setp("");setspi(null)}}
  style={{backgroundColor:"black",borderRadius:25,}}>
          <utils.vectorIcon.Ionicons  name="arrow-back" color="white" size={25} />
  </TouchableOpacity> 
  
   
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

      const i =  allSkills[indexs].s[skillIndex].task[taskIndex]

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

 

</View>

 
        </View>
         ) }

         const renderDocument=({item,index})=>{

          let c="";

          c= item.text || ""

          if(c==""){

            let docname=item.name;
            let ext= "";
        
           var d = JSON.stringify(docname).split(".")
           docname =d[0]
           docname= utils.strLength(docname,"docname")
            ext=d[1]
        
           let dname=docname+" ."+ext
           dname=dname.replace(/"/g, '')
         
           const i = allSkills[indexs].s[skillIndex].task[taskIndex]
  
              return(
                <View style={[styles.taskBox,{marginTop:index==0?10:0,marginBottom:10,alignItems:"center"}]} >
               
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}> 
              
  <TouchableOpacity onPress={()=>{

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
  
  }}  style={{width:150,height:35,backgroundColor:"#15756c",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
  <Text style={{textTransform:"capitalize",color:"white",fontSize:14}}>{dname}</Text>
  </TouchableOpacity >
  
 
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
          const i = allSkills[indexs].s[skillIndex].task[taskIndex]
 
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

 

      </View>
     
      
             ) }
    
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


             let height= null;
              
       
             if((item.submit==true && item.result==true) || (item.submit==true && item.result==false) ){
              height= Window.Height/1.6
             }else{ 
              height= Window.Height/2.1
             } 
       
 
            

        return(
    <View style={{flex:1,backgroundColor:GV.containerBackgroundColor}}>      
    <utils.Loader loader={loader} />
    <ScrollView>

 
    <View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
    <utils.Header  nav={props.navigation} type="stack"  />
    </View>
    
       <View style={{padding:7,margin:7}}>     
       <View style={{marginLeft:5}}> 
       <utils.HeaderTitle   message={item.name}  title="Submitted Task" color={"#15756c"}  type="headertitle" />
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
   <TouchableOpacity  style={{alignSelf:"center",right:0,position:"absolute"}} onPress={()=>{setvvv(true)}}>
   <utils.vectorIcon.Entypo name="circle-with-cross" color={"#FF0000"}  size={25}/>
   </TouchableOpacity>
    :null}
    </View>
       )}    
    

    
       </View>
       </View>
     
      
        {mv && renderFullImage()}
        {vv && renderRejectSubmitModal()}

       {/* <View style={{borderColor:"green",borderWidth:0.5,width:wp("90%"),alignSelf:"center",borderRadius:4,marginBottom:20}}> */}
           {/* <ScrollView showsVerticalScrollIndicator={false}> */}
           {rqr=="text"  && renderTextOption()}
           {rqr=="photo" && renderPhotoOption()}
           {rqr=="audio" && renderAudioOption()} 
           {rqr=="video" && renderVideoOption()}
           {/* </ScrollView> */}
         {/* </View> */}


         
         <View style={{height:20}} />

           </ScrollView>

        {(item.submit&&item.result==null) &&  renderSubmitButton()}
         {(item.submit&&item.result==false) &&  renderfdbSubmitButton(item.feedback)}
           
           

    </View>
        )
    
}


export default  inject("store")(observer(Skills_Task_Submit));

 