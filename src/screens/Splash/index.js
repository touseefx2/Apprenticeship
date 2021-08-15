import React, { Component} from "react";
import {View,Image } from "react-native";
import {styles} from "./styles"


 export default class Splash  extends Component {
  
 

  render() {
 

    return (
      <View style={styles.container}>

 <Image  style={styles.image} resizeMode="contain" source={require("../../assets/Splash_Logo/logo.png")} />

        </View>
    );
  }
}


 
 
 
 
  
  