import   React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens}  from "../../screens/Supervisor/index"
import  {CommonScreens}  from "../../screens/index";
import CustomDrawerContent from "../CustomDrawerContent";
import icon  from './styles';
import { Window } from '../../themes/Window';

const Drawer  = createDrawerNavigator();


   export  const Supervisor_Stack = ()=> 
   {
    return(
    <Drawer.Navigator  
    initialRouteName="Home_Stack"
    drawerStyle={{
      width:Window.Width/1.4,
      // height:Window.Height
    }} 
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
    
        <Drawer.Screen  name="Home" component={Home_Stack} options={icon.homeIcon} />
        <Drawer.Screen  name="Profile"  component={Screens.Profile} options={icon.profileIcon}/>
        <Drawer.Screen  name="Submissions" component={Submissions_Stack} options={icon.subIcon} />
        <Drawer.Screen  name="Students" component={Student_Stack} options={icon.studentIcon} />
        <Drawer.Screen  name="Reports" component={Screens.Reports} options={icon.reportIcon} />
        <Drawer.Screen  name="Chats" component={Chat_Stack} options={icon.chatIcon} />
        <Drawer.Screen  name="Notification" component={Screens.Notification} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}/>
 
        {/* 
       
        <Drawer.Screen  name="Chat" component={Screens.Chat} options={icon.chatIcon} />
        <Drawer.Screen  name="Notification" component={Screens.Notification} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
        <Drawer.Screen  name="Rate" component={Screens.Rate} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}/> */}
        <Drawer.Screen  name="Logout" component={CommonScreens.Logout}  options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}/>

    </Drawer.Navigator>
    )
}


 
const Stack = createStackNavigator();

  const Student_Stack = ()=> 
{
    return(
   <Stack.Navigator 
       initialRouteName="Student"
       screenOptions={{
         animationEnabled: false
       }}
       headerMode='none'
   >

       <Stack.Screen name="Student" component={Screens.Students} />
       <Stack.Screen name="Skills" component={Screens.Skills} />
       <Stack.Screen name="Skills_Task" component={Screens.Skill_Task}   />
       <Stack.Screen name="Skills_Task_Submit" component={Screens.Skill_Task_Submit}   /> 
       <Stack.Screen  name="Chats" component={Chat_Stack} options={icon.chatIcon} />
       
  
   </Stack.Navigator>
    )
}

const Submissions_Stack = ()=> 
{
    return(
   <Stack.Navigator 
       initialRouteName="Submission"
       screenOptions={{
         animationEnabled: false
       }}
       headerMode='none'
   >

       <Stack.Screen name="Submission" component={Screens.Submissions} />
       <Stack.Screen name="Skills_Task_Submit" component={Screens.Skill_Task_Submit}   />
  
   </Stack.Navigator>
    )
}
 
const Home_Stack = ()=> 
{
    return(
   <Stack.Navigator 
       initialRouteName="Hom"
       screenOptions={{
         animationEnabled: false
       }}
       headerMode='none'
   >
       <Stack.Screen  name="Hom" component={Screens.Home}   />
       <Stack.Screen name="Skills" component={Screens.Skills} />
       <Stack.Screen name="Skills_Task" component={Screens.Skill_Task}   />
      <Stack.Screen name="Skills_Task_Submit" component={Screens.Skill_Task_Submit}   />
  
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
       <Stack.Screen  name="ChatBox" component={Screens.ChatBox}   />
       <Stack.Screen  name="Chat" component={Screens.Chat}   />
  
   </Stack.Navigator>
    )
}