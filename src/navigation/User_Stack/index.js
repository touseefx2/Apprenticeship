import   React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens}  from "../../screens/User/index"
import CustomDrawerContent from "../CustomDrawerContent";
import icon  from './styles';
import  {CommonScreens}  from "../../screens/index";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Drawer  = createDrawerNavigator();


   export  const User_Stack = ()=> 
   {
    return(
    <Drawer.Navigator  
    initialRouteName="Homes"
    drawerStyle={{
      width: wp('65%'),
     height: hp('100%')
    }} 
    screenOptions={{swipeEnabled:true}}
    drawerContentOptions={{
      // activeTintColor: 'red',
      // activeBackgroundColor: 'yellow',
      // inactiveTintColor: 'blue',
      // inactiveBackgroundColor: 'white',
      labelStyle:{
        color:"white",
      }
    }}
    drawerContent={props => <CustomDrawerContent {...props}/>}
    >
    
        <Drawer.Screen  name="Homes" component={Home_Stack} options={icon.homeIcon}  />
        <Drawer.Screen  name="Profile"  component={Screens.Profile} options={icon.profileIcon}/>
        <Drawer.Screen  name="Skills" component={Skill_Stack} options={icon.skillIcon} />
        <Drawer.Screen  name="Reports" component={Screens.Reports} options={icon.reportIcon} />
        <Drawer.Screen  name="Chats" component={Chat_Stack} options={icon.chatIcon} />
        <Drawer.Screen  name="Notification" component={Screens.Notification} 
        options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}
            />
        <Drawer.Screen  name="Rate" component={Screens.Rate} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}/>
        <Drawer.Screen  name="Logout" component={CommonScreens.Logout}  options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}/>

    </Drawer.Navigator>
    )
}


 
const Stack = createStackNavigator();

  const Skill_Stack = ()=> 
{
    return(
   <Stack.Navigator 
       initialRouteName="Skill"
       screenOptions={{
         animationEnabled: false
       }}
       headerMode='none'
   >

       <Stack.Screen name="Skill" component={Screens.Skills}
       options={props => {
        let parent = props.navigation.dangerouslyGetParent();
        parent.setOptions({
          swipeEnabled: true
        })
      }}
       />
       <Stack.Screen name="Skills_Task" component={Screens.Skill_Task}   
        options={props => {
          let parent = props.navigation.dangerouslyGetParent();
          parent.setOptions({
            swipeEnabled: false
          })
        }}
       />
       <Stack.Screen name="Skills_Task_Submit" component={Screens.Skill_Task_Submit}  
        options={props => {
          let parent = props.navigation.dangerouslyGetParent();
          parent.setOptions({
            swipeEnabled: false
          })
        }}
       />
  
   </Stack.Navigator>
    )
}


const Home_Stack = ()=> 
{
    return(
   <Stack.Navigator 
       initialRouteName="Home"
       screenOptions={{
         animationEnabled: false
       }}
       headerMode='none'
   >
       <Stack.Screen  name="Home" component={Screens.Home}  
        options={props => {
          let parent = props.navigation.dangerouslyGetParent();
          parent.setOptions({
            swipeEnabled: true
          })
        }}
       />
       <Stack.Screen name="Skills_Task" component={Screens.Skill_Task}  
       options={props => {
        let parent = props.navigation.dangerouslyGetParent();
        parent.setOptions({
          swipeEnabled: false
        })
    }}
       />
       <Stack.Screen name="Skills_Task_Submit" component={Screens.Skill_Task_Submit} 
         options={props => {
          let parent = props.navigation.dangerouslyGetParent();
          parent.setOptions({
            swipeEnabled: false
          })
        }}
       />
  
   </Stack.Navigator>
    )
}

const Chat_Stack = ()=> 
{
    return(
   <Stack.Navigator 
       initialRouteName="ChatBox"
       screenOptions={{
         animationEnabled: false
       }}
       headerMode='none'
   >
       <Stack.Screen  name="ChatBox" component={Screens.ChatBox}
        options={props => {
          let parent = props.navigation.dangerouslyGetParent();
          parent.setOptions({
            swipeEnabled: true
          })
        }}
       />
       <Stack.Screen  name="Chat" component={Screens.Chat} 
        options={props => {
          let parent = props.navigation.dangerouslyGetParent();
          parent.setOptions({
            swipeEnabled: false
          })
        }}
       />
  
   </Stack.Navigator>
    )
}
 