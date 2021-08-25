import React from "react";
import {Image} from 'react-native';
import utils from "../../utils";
 

 const homeIcon = {
  drawerLabel: 'Home',
headerShown: false,
  drawerIcon: ({ focused, size }) => (
         
    <Image 
    style={{width:22,height:22}}
    resizeMode="contain"
    source={require("../../assets/drawer_items_icon/home.png")}
    />
    // <utils.vectorIcon.AntDesign
    //   name="home"
    //   size={GV.iconSize}
    //   color={focused ? GV.iconfocuscolor : GV.iconunfocuscolor}
    // />
  )
}
 
const profileIcon = {
  unmountOnBlur:true,
headerShown: false,
drawerIcon: ({ focused, size }) => (
  <Image 
  style={{width:22,height:22}}
  resizeMode="contain"
  source={require("../../assets/drawer_items_icon/profile.png")}
  />
)  
}

const studentIcon = {
 
  headerShown: false,
  title:"Students",
  drawerIcon: ({ focused, size }) => (
      <utils.vectorIcon.Entypo 
      size={22}
      color="white"
      name="users"
      />
    // <Image 
    // style={{width:22,height:22}}
    // resizeMode="contain"
    // source={require("../../assets/drawer_items_icon/skills.png")}
    // />
  )  
  }

  const reportIcon = {
    headerShown: false,
    unmountOnBlur:true,
    drawerIcon: ({ focused, size }) => (
      <Image 
      style={{width:22,height:22}}
      resizeMode="contain"
      source={require("../../assets/drawer_items_icon/reports.png")}
      />
    )  
    }

const chatIcon = {
  headerShown: false,
  drawerIcon: ({ focused, size }) => (
    <Image 
    style={{width:22,height:22}}
    resizeMode="contain"
    source={require("../../assets/drawer_items_icon/chat.png")}
    />
  )  
 

}

const subIcon = {
  headerShown: false,
  drawerIcon: ({ focused, size }) => (
    <Image 
    style={{width:22,height:22}}
    resizeMode="contain"
    source={require("../../assets/drawer_items_icon/skills.png")}
    />
  )  
 

}

const rateIcon = {
  headerShown: false,
 title:"Rate the app",
  drawerIcon: ({ focused, size}) => (
    <Image 
    style={{width:22,height:22}}
    resizeMode="contain"
    source={require("../../assets/drawer_items_icon/star.png")}
    />
  )
}


const logoutIcon = {
  headerShown: false,
  title:"Sign out",
  drawerIcon: ({ focused, size}) => (
    <Image 
    style={{width:22,height:22}}
    resizeMode="contain"
    source={require("../../assets/drawer_items_icon/exit.png")}
    />
  )
}

const icon={homeIcon,logoutIcon,profileIcon,chatIcon,studentIcon,reportIcon,rateIcon,subIcon}

export default icon;


 