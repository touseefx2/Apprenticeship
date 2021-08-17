import React  from "react"
import { View,Text,Image,StyleSheet,TouchableOpacity, ScrollView} from "react-native";
import { DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Window } from "../themes/Window";
 

export default   function CustomDrawerContent (props) { 
 
const { state,...rest } = props;

const newState = { ...state}  //copy from state before applying any filter. do not change original state
newState.routes = newState.routes.filter(item => (item.name !== 'Logout' && item.name !=="Rate" && item.name !=="Notification")) //replace "Login' with your route name
 
 

    return(  
      <View   style={{flex:1,backgroundColor:"#007069"}} >

<View style={{height:responsiveHeight( Window.Height>710?95:90)}}>
  <DrawerContentScrollView 
        showsVerticalScrollIndicator={false}
        style={{padding:10}} >
    


<Image  style={styles.image} resizeMode="contain" source={require("../assets/Splash_Logo/logo.png")} />

<Text style={{fontSize:12,color:"white",marginLeft:15,marginTop:"12%"}}>DASHBOARD</Text>


<View style={{marginTop:"6%"}}>

 
<View  style={{width:"90%",height:0.5,backgroundColor:"white",alignSelf:"center"}} />
    
     <DrawerItemList   state={newState} {...rest} />
     
      
    <Text style={{fontSize:12,color:"white",marginTop:20,marginLeft:15}}>COMPANY</Text>
 
 
<View  style={{width:"90%",height:0.5,backgroundColor:"white",marginTop:"6%",marginBottom:10,alignSelf:"center"}} />
 
                         <TouchableOpacity 
                            style={styles.drawerItem} 
                            onPress={() => { props.navigation.navigate('Rate')}} >
                             <Image 
                              style={{width:22,height:22}}
                              resizeMode="contain"
                              source={require("../assets/drawer_items_icon/star.png")}
                              />
                            <Text style={{fontSize:14,color:"white",marginLeft:30}}>Rate the app</Text>                    
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.drawerItem,{marginBottom:10}]} 
                            onPress={() => { props.navigation.navigate('Logout')}}>
                             <Image 
                              style={{width:22,height:22}}
                              resizeMode="contain"
                              source={require("../assets/drawer_items_icon/exit.png")}
                              />
                            <Text style={{fontSize:14,color:"white",marginLeft:30}}>Sign out</Text>                    
                        </TouchableOpacity>
  
  </View>

  

        </DrawerContentScrollView>
</View>
      
      
        <View style={{ justifyContent:"center",alignItems:"center",paddingLeft:10,paddingRight:10,margin:5}}>
         <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
        <Text style={{fontSize:12,color:"white",marginLeft:15}}>Legal</Text>
        <Text style={{fontSize:12,color:"white",marginLeft:15}}>Version 1.0</Text>
         </View>
        </View>
   
        

        </View>
                                   );
                               

}


const styles = StyleSheet.create({
                                  
   
  image:{width:104,height:99},
  name:{fontSize:15.5,fontWeight:"bold",color:"white",textTransform:"capitalize"},
  drawerItem:{ 
  flexDirection: 'row',
  width: '100%',
  height: 50,
  alignItems: 'center',
  paddingLeft: 15}
})

 
 