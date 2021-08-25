import React, { Component,useEffect,useState } from 'react';
import {Text,View,Image,ScrollView,KeyboardAvoidingView,Platform} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import utils from "../../../utils/index";
import {styles} from "./styles"
import {inject, observer } from "mobx-react"; 
import GVs from '../../../store/Global_Var';

export default  inject("store")(observer(Profile));


const myuser={
  photo:"",
  mailingAddress:"house # 2000 , street # 98 , sector i10/1 Islamabad",
  trade:"Plumbing",
  birthdate:"30/12/1997",
  phone:"03657878987",
  phone2:"090078601",
  employer_Partner_business_Name:"x2",
  business_Address:"house # 2000 , street # 98 , sector i10/1 Islamabad",
  business_Phone:"051878798",
  business_Email_Address:"hactric@hr.com",
  supervisor:"x3",
  supervisor_Phone:"0987878796",
  demographics:"Inmate Care",
  
}

 function   Profile  (props) {

  const [fn,setfn]=useState("");
  const [ln,setln]=useState("");
  const [loader,setloader]=useState(false);
  const {user} = props.store;

  
 
  useEffect(()=>{
    setfn(user.FirstName)
    setln(user.LastName)

    setTimeout(() => {
      setloader(false);
    }, 500);
  },[])

  const cef=()=>{

    if(fn=="" || ln==""){
     return true
    }else{
      return false
    }
  }

  const onclickupdate=()=>{
    if(cef()){
      utils.AlertMessage("","Please fill empty fields")
    }else{
      utils.AlertMessage("","Update Success")
    }
  }

  const renderButton=()=>{
  
    return(
   <View style={{ justifyContent: 'flex-end',marginBottom: 15,alignSelf:"center",marginTop:10}}>
  <Button   compact={true} dark={false}   mode="contained" labelStyle={styles.button1Text} color="#007069" style={styles.button1}  onPress={()=>{onclickupdate()}}>
  Update
  </Button>
  </View>
      )
    
  
  }

const renderprofile = ()=>
{ 

  //  let First_Name =  user.FirstName
  //  let Last_Name =  user.LastName
   let name= fn+" "+ln
   name= utils.strLength(name,"name")
   var email= user.email.toLowerCase();

   let c1="Personal"
   let c2="Business"
   let c3="Supervisor"

return(
  <View style={{marginBottom:20}}>

  <View style={styles.dp} > 

<View style={{margin:5,padding:5}}>
<Image style={styles.avatar} source={myuser.photo!=""?{uri:myuser.photo}:require("../../../assets/dp.png")}/>
</View>

<View style={{flexShrink:1,marginRight:2,marginLeft:6}}>
 <Text style={styles.name}>{name}</Text>
</View>


</View>

 
{/* personal card */}
<Text style={styles.cardtitle}>{c1}</Text>
 
 <View style={{margin:20,marginTop:10,backgroundColor:"white",elevation:8,borderRadius:10}}>
 
<View style={{margin:5,padding:5}}>
  
  
<TextInput
      mode="outlined"
      label="First Name"
      value={fn}
      placeholder="First Name"
      onChangeText={(t)=>{setfn(t)}}
      // right={<TextInput.Affix text="/100" />}
    />

<TextInput
      style={styles.textInput}   
      mode="outlined"
      label="Last Name"
      value={ln}
      placeholder="Last Name"
      onChangeText={(t)=>{setln(t)}}
    />

<TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="Date Of Birth"
      scrollEnabled={true}
      value={myuser.birthdate}
      placeholder="Birthdate"
    />

<TextInput
      style={styles.textInput}
      multiline={true}
      disabled={true}
      mode="outlined"
      label="Mailing Address"
      scrollEnabled={true}
      value={myuser.mailingAddress}
      placeholder="Mailing Address"
    />

<TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="Email"
      scrollEnabled={true}
      value={email}
      placeholder="Email"
    />

 
<TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="Phone"
      scrollEnabled={true}
      value={myuser.phone}
      placeholder="Phone"
    />

{myuser.phone2!="" && (
  <TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="Alternate Phone (optional)"
      scrollEnabled={true}
      value={myuser.phone2}
      placeholder="Phone_2"
    />

)}
            
  </View> 

  </View>


  {/* Business card */}
<Text style={[styles.cardtitle,{marginTop:"4%"}]}>{c2}</Text>
 
 <View style={{margin:20,marginTop:10,backgroundColor:"white",elevation:8,borderRadius:10}}>
 
<View style={{margin:5,padding:5}}>
  
  
<TextInput
      multiline={true}
      disabled={true}
      mode="outlined"
      label="Trade"
      scrollEnabled={true}
      value={myuser.trade}
      placeholder="Trade"
    />
 
  

<TextInput
      style={styles.textInput}
      multiline={true}
      disabled={true}
      mode="outlined"
      label="Employer Partner Business Name"
      scrollEnabled={true}
      value={myuser.employer_Partner_business_Name}
      placeholder="Employer Partner business Name"
    />

<TextInput
      style={styles.textInput}
      multiline={true}
      disabled={true}
      mode="outlined"
      label="Business Address"
      scrollEnabled={true}
      value={myuser.business_Address}
      placeholder="Business Address"
    />

<TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="Business Phone"
      scrollEnabled={true}
      value={myuser.business_Phone}
      placeholder="Business Phone"
    />

<TextInput
      style={styles.textInput}
      multiline={true}
      disabled={true}
      mode="outlined"
      label="Business Email Address"
      scrollEnabled={true}
      value={myuser.business_Email_Address}
      placeholder="Business Email Address"
    />

            
  </View> 

  </View>


 {/* Supervisor card */}
 <Text style={[styles.cardtitle,{marginTop:"4%"}]}>{c3}</Text>
 
 <View style={{margin:20,marginTop:10,backgroundColor:"white",elevation:8,borderRadius:10}}>
 
<View style={{margin:5,padding:5}}>
  
<TextInput
      multiline={true}
      disabled={true}
      mode="outlined"
      label="Supervisor"
      scrollEnabled={true}
      value={myuser.supervisor}
      placeholder="Supervisor"
    />

<TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="Supervisor Phone"
      scrollEnabled={true}
      value={myuser.supervisor_Phone}
      placeholder="Supervisor Phone"
    />



<TextInput
      style={styles.textInput}
      multiline={true}
      disabled={true}
      mode="outlined"
      label="Demographics"
      scrollEnabled={true}
      value={myuser.demographics}
      placeholder="Demographics"
    />


  </View> 

  </View>
  


</View>

)
}


    return (
      <View style={{flex:1,backgroundColor:"white"}}> 
       <utils.Loader loader={loader} />
 <View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation} type="Profile"   />
</View>

         <KeyboardAvoidingView
    keyboardVerticalOffset={Platform.OS == "ios" ? 10 : 0}
    behavior={Platform.OS == "ios" ? "padding" : ""} style={{ flex: 1 }} >

        <ScrollView>        
       {renderprofile()}  
       </ScrollView>

       {renderButton()}

       </KeyboardAvoidingView>

     </View>

    );
 

}



 