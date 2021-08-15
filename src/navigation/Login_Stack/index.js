import React  from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import  {CommonScreens}  from "../../screens/index";
 
 
 const Stack = createStackNavigator();

 export  const Login_Stack = ()=> 
 {
     return(
    <Stack.Navigator 
        initialRouteName="LoginSample"
        screenOptions={{
          animationEnabled: false
        }}
        headerMode='none'
    >

        <Stack.Screen name="LoginSample" component={CommonScreens.LoginSample} />
        <Stack.Screen name="Login" component={CommonScreens.Login} />
        <Stack.Screen name="Loading" component={CommonScreens.Loading} />
        <Stack.Screen name="ForgotPassword" component={CommonScreens.ForgotPassword}   />
   
    </Stack.Navigator>
     )
}


 

