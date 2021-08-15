import React, { Component } from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import utils from "../../../utils/index";
import {styles} from "./styles"
 
export default function  Notification  (props) {
 
    return (
      <View style={styles.container}>

<View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation} type=""   />
</View>

<View style={{padding:7,margin:7}}>   
   <View style={{marginLeft:5}}> 
   <utils.HeaderTitle   title="Notification"  message={"Notify all new message"}   type="headertitle" /> 
   </View>
   </View>
 
     </View>


  
    );
 

}



 