import React, { Component} from "react";
import {View,Image,Text} from "react-native";
import {Button} from 'react-native-paper';
import GV from "./Global_Var";
import utils from "../../utils/index"
import {styles} from "./styles"
import GVs from "../../store/Global_Var";
import AsyncStorage from '@react-native-async-storage/async-storage'

 export default class LoginSample  extends Component {
  
  constructor(props)
  {
  super(props);
  this.state=
  {
 loader:true
  };
   
  }
  
  goToNextScreen(screenName){
    this.props.navigation.navigate(screenName)
  } 

  getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData')
      const jsonValue2 = await AsyncStorage.getItem('userSkillData')

      if (jsonValue != null) {

        const v = JSON.parse(jsonValue)

        let skills="";
        if (jsonValue2 != null) {
          const vv = JSON.parse(jsonValue2)
          if(v.id==vv.uid){
           skills=vv.skill.skill
          }
        } 
 
          this.setState({loader:false})
          this.props.navigation.replace("Loading",{data:v,s:"no",skills:skills})
    
      }  else{
        this.setState({loader:false})
      }

    } catch (e) {

      this.setState({loader:false})
      console.log("get user data error : ", e)
   
    }
  }

  componentDidMount(){
    this.getUserData()
  }

  render() {
  
    return (
<View style={styles.container}>

<utils.Loader loader={this.state.loader} />

<View style={styles.title}>
<Image  style={styles.image} resizeMode="contain" source={require("../../assets/Splash_Logo/logo.png")} />
<Text style={styles.title1}>{GV.title1}</Text>
<Text style={styles.title2}>{GV.title2}</Text>
</View>

<Button   mode="contained" dark={true} compact={true} labelStyle={styles.button1Text} color="white" style={styles.button1} onPress={() =>this.goToNextScreen("Login")}>
{GV.button1title}   
</Button>
 
        </View>
    );
  }
}

