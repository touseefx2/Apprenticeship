import React from "react";
import NetInfo from "@react-native-community/netinfo";
import Stack from "./src/navigation/index"
import utils from "./src/utils/index";
import Splash from "./src/screens/Splash/index";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalFont from 'react-native-global-font'
import GVs from "./src/store/Global_Var";
import DeviceInfo from 'react-native-device-info'; 


const RootStack = createStackNavigator();

export default class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

handleConnectivityChange = state => {
  if (state.isConnected) {
  } else {
   utils.AlertMessage( "No internet connection","Please connect internet.")
  }
};

componentDidMount() {
  this.getDeviceInfo();
  GlobalFont.applyGlobal(GVs.fontNormal) 
  NetInfo.addEventListener(this.handleConnectivityChange);
  setTimeout(() => {
    this.setState({loading:false})
  }, 1500);


}

  getDeviceInfo=()=>{
  DeviceInfo.getApiLevel().then((apiLevel) => {
     GVs.api=apiLevel
  });
}

 
render()
{
  const {loading} = this.state;
 
  if (loading) 
  {
    return  <Splash />
  }

  else if (!loading) 
  {

   return (  
<NavigationContainer>

<RootStack.Navigator  screenOptions={{headerShown: false }}>

  <RootStack.Screen name='Login_Stack' component={Stack.Login_Stack}/> 

  <RootStack.Screen name='User_Stack' component={Stack.User_Stack}/>

  <RootStack.Screen name='Supervisor_Stack' component={Stack.Supervisor_Stack}/>


</RootStack.Navigator>

    </NavigationContainer>

   )
  }

}}
 