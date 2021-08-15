import React  from 'react';
import { View,TouchableOpacity,Keyboard} from "react-native";
import {Button, Appbar} from 'react-native-paper';
import { Item, Input ,Text } from 'native-base';
import utils from "../../utils/index"
import GV from "./Gloabal_Var"

import AwesomeAlert from 'react-native-awesome-alerts';
import NetInfo from "@react-native-community/netinfo";
import {styles} from "./styles";


//validation
let emailValidate=true


 export default class  ForgotPassword extends React.Component  {
  constructor(props)
  {
    super(props);
    
    this.state = {
        em:"",
        load:false,
        errmsg:"",
        rl:"F",
        isInternetConnected:null,
        emailF:false,
        emailV:false,
        emailInputFieldborderColor:null,
    }
  }

  
 
     clearFields = () =>
{
  this.state = {
    em:"",
    load:false,
    errmsg:"",
    rl:"F",
    isInternetConnected:null,
    emailF:false,
    emailV:false,
    emailInputFieldborderColor:null,
}
}
 
  handleInternetConnectivityChange = state => {
    if (state.isConnected) {
      this.setState({isInternetConnected:true})
    } else {
      this.setState({isInternetConnected:false})
    }
  };

  componentDidMount(){
 
    let  color=  GV.InputFieldborderColor 
  
    this.setState({
  emailInputFieldborderColor:color,
      })

    this.unsubscribe = NetInfo.addEventListener(this.handleInternetConnectivityChange)
  }

 
  componentWillUnmount() {
    if (this.unsubscribe){this.unsubscribe()}
    this.clearFields()
    }

    renderShowInternetErrorAlert(title,message){
      const {showAlert}= this.state;
      return(
        <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={title}
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          this.setState({showAlert:false})
        }}
      />
      )
      }
  
 
chkacnt(e)
{
 
  alert("found")
 

}

checkEmptyFields= ( email )=>
{
  //validation
  {email !="" && ( emailValidate     = utils.Validation.EmailValidate(email) )}  
    
    this.setState({
      emailV: emailValidate ? false : true ,
    })
  
    if(email=="" ){
      this.setState({
        emailF:email=="" ? true : false,
      })
      return false;
    } else{
      return true;
    }

 
 


 
}

click(e,isInternetConnected)
  {
   
  emailValidate=true

  let  color= GV.InputFieldborderColor 
  this.setState({ 
  emailInputFieldborderColor:color,
      })


      var checkEmptyFields = this.checkEmptyFields(e)

      if(checkEmptyFields)
{
  if( emailValidate   ) 
  { 
 if(isInternetConnected)
    {
      this.setState({load:true,errmsg:"",rl:"F"})
      setTimeout(() => {
        this.setState({load:false}),
        this.chkacnt(e);
      },1200)   ;
    }
    else{
     this.setState({showAlert:true})
    }    
  } 
}
  

}
 
 
render(){
  const {isInternetConnected,em,emailF,emailV,emailInputFieldborderColor,load} = this.state;
return(
      <View style={{flex:1,backgroundColor:  GV.containerBackgroundColor }}>

  {!isInternetConnected && this.renderShowInternetErrorAlert("No internet connection","Please connect internet.")}
    
    <View style={{padding:10,margin:10}}>

      
   
    
           <View>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
          <utils.vectorIcon.Ionicons name="arrow-back" color="black" size={30} />
          </TouchableOpacity>
<Text style={styles.title1}>Forgot your Password?</Text>
<Text style={styles.title2}>Enter your email to recover your account.</Text>
          </View>


    <View style={{marginTop:"10%"}}>

           <Item style={[styles.Item,{borderColor: (emailF || emailV ) ? ( GV.InputFieldborderErrorColor) : emailInputFieldborderColor,backgroundColor: GV.inputItemBackgroundColor  }]} rounded>
            <Input  style={[styles.Input,{color: GV.InputFieldTextColor }]}
            placeholder='E-mail' placeholderTextColor={GV.inputPlaceholderTextColor} value={em}   
             onChangeText={(txt)=>this.setState({em:txt,emailF:false,emailV:false})} />
            </Item>
            <utils.CheckError  emailF={emailF} emailV={emailV} textColor={ GV.errorTextColor }/>           
 
            
     </View>
        

     </View>

              <utils.Loader loader={load} />        
       
  <Button   mode="contained" labelStyle={styles.button1Text} color="#007069" style={styles.button1} onPress={()=>{this.click(em,isInternetConnected),Keyboard.dismiss()}}>
  Recover Account
</Button>
 

 

      </View>
)

    }

     }

  
   