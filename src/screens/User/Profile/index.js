import React, { Component } from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import utils from "../../../utils/index";
import {styles} from "./styles"
import {inject, observer } from "mobx-react"; 

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
 
  const {user} = props.store;
 
const renderprofile = ()=>
{ 

   let First_Name =  user.FirstName
   let Last_Name =  user.LastName
   let name= First_Name+" "+Last_Name
   name= utils.strLength(name,"name")
   var email= user.email.toLowerCase();

return(
  <View style={{marginBottom:50}}>

  <View style={styles.dp} > 

<View style={{margin:5,padding:5}}>
<Image style={styles.avatar} source={myuser.photo!=""?{uri:myuser.photo}:require("../../../assets/dp.png")}/>
</View>

<View style={{flexShrink:1,marginRight:2,marginLeft:6}}>
 <Text style={styles.name}>{name}</Text>
</View>


</View>

 

  <View style={{margin:10,padding:10,marginTop:"11%"}}>
 

             

<TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="First Name"
      value={First_Name}
      placeholder="First Name"
      // right={<TextInput.Affix text="/100" />}
    />

<TextInput
      style={styles.textInput}
      disabled={true}
      mode="outlined"
      label="Last Name"
      value={Last_Name}
      placeholder="Last Name"
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


<TextInput
      style={styles.textInput}
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

<TextInput
      style={styles.textInput}
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

)
}

 
    return (
      <View> 
         <utils.Header  nav={props.navigation}   type="profile" />
        <ScrollView>        
       {renderprofile()}  
       </ScrollView>
     </View>


  
    );
 

}



 