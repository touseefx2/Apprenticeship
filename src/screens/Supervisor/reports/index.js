import React, { Component, useEffect, useState,useRef } from 'react';
import {View,Text,processColor, TouchableOpacity,Modal, ScrollView,BackHandler} from 'react-native';
import utils from "../../../utils/index";
import GVs from '../../../store/Global_Var';
import { styles } from './styles'; 
import {PieChart } from "react-native-chart-kit";
import { Window } from '../../../themes/Window';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import MonthSelectorCalendar from 'react-native-month-selector'; //add this import line
import ModalSelector from 'react-native-modal-selector'
import { inject, observer } from "mobx-react"; 
import DropDownPicker from 'react-native-dropdown-picker';

export default  inject("store")(observer(Reports));

 //Custom Year Modal Data
 let index=0;
   const yearData = [
       { key:index++, section: true, label: 'Select Year',},
       { key:index++, label: '1997',value:"1997"},
       { key:index++, label: '1998',value:"1998"},
       { key:index++, label: '1999',value:"1999"},
       { key:index++, label: '2000',value:"2000"},
       { key:index++, label: '2001',value:"2001"},
       { key:index++, label: '2002',value:"2002"},
       { key:index++, label: '2003',value:"2003"},
       { key:index++, label: '2004',value:"2004"},
       { key:index++, label: '2005',value:"2005"},
       { key:index++, label: '2006',value:"2006"},
       { key:index++, label: '2007',value:"2007"},
       { key:index++, label: '2008',value:"2008"},
       { key:index++, label: '2009',value:"2009"},
       { key:index++, label: '2010',value:"2010"},
       { key:index++, label: '2011',value:"2011"},
       { key:index++, label: '2012',value:"2012"},
       { key:index++, label: '2013',value:"2013"},
       { key:index++, label: '2014',value:"2014"},
       { key:index++, label: '2015',value:"2015"},
       { key:index++, label: '2016',value:"2016"},
       { key:index++, label: '2017',value:"2017"},
       { key:index++, label: '2018',value:"2018"},
       { key:index++, label: '2019',value:"2019"},
       { key:index++, label: '2020',value:"2020"},
       { key:index++, label: '2021',value:"2021"},
       { key:index++, label: '2022',value:"2022"},
       { key:index++, label: '2023',value:"2023"},
     ];

 function  Reports (props) {
  
  const { catg,changeCat,allUsers,allSkills,addAllUsers } = props.store;

  const  skill=allSkills
  
 
  const [std,setstd]= useState("");
  const [val,setval]= useState("all");

  // const [active,setactive]= useState("skills");
  const [cat,setcat]= useState("day");
  const [dpv,setdpv]= useState(false);  //date picker vsbl
  const [myv,setmyv]= useState(false);  //month year  vsbl
 
  const [loader,setloader]=useState(false);

  const [dayLabel,setdayLabel]=useState([]);
  const [dayValue,setdayValue]=useState([]);
  const [days,setdays]=useState([]);
  
  const [date,setdate]= useState(moment(new Date()).format("D MMMM Y"));   
  const pdate = usePrevious(date);
  const [date2,setdate2]= useState( moment( moment(date).add(9, 'days') ).format("D MMMM Y"));  
  const pdate2 = usePrevious(date2);
  
  const [cd2,setcd2]= useState(false);  

  const [isEmpty,setisEmpty]= useState(false);  //chk day report is empty or not

  const [mdate,setmdate]= useState(moment(new Date()).format("MMMM Y"));  //date picker vsbl
  const [ydate,setydate]= useState(moment(new Date()).format("YYYY"));  //date picker vsbl

  let numOfHourseWorkDay=8
  let numOfHourseWorkWeek=48
  let numOfHourseWorkMonth=192
 
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
      
    });
    return ref.current;
  }
  
  
  useEffect(()=>{
    console.log("loader : ",loader)
  })

  useEffect(()=>{
if(std==null){
  setval("all")
}else{
  if(std!=""){
  setval(std)
  }
}
  },[std])

  
  const  piechartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  
  const setDate=(d)=>{
      setdpv(false)
      setmyv(false)
      setloader(true)

      if(cat=="day"){
 
        if(cd2)
        {

          var a = moment(d);
          var b = moment(date);
 
          let c= moment(a).isAfter(b)
 
          let dfc=0;
          if(c){
          dfc  = a.diff(b, 'days') 
          }else{
          dfc =  b.diff(a, 'days') 
          }
        
       if(dfc>9){
        alert("Please select date in range dfc between 9 days")
       }else if(dfc<2){
        alert("Please select date in range dfc between 2 days")
       }else
       {
           setdate2(moment(d).format("D MMMM Y"));
       }
        
        }
        else
        {
         var a = moment(d);
         var b = moment(date2);

         let c= moment(a).isAfter(b)

         let dfc=0;
         if(c){
         dfc  = a.diff(b, 'days') 
         }else{
         dfc =  b.diff(a, 'days') 
         }
        
          
      if(dfc>9){
        alert("Please select date in range dfc between 9 days")
      }else if(dfc<2){
        alert("Please select date in range dfc between 2 days")
       }else
      {
        setdate(moment(d).format("D MMMM Y"));
      }

         
        }
   
        setcd2(false)

      }

      if(cat=="week"){
        setmdate(moment(d).format("MMMM Y"));
      }

      if(cat=="year"){
        setydate(moment(d).format("YYYY"));
      }

      setTimeout(() => {
         setloader(false)
      }, 500);
     
     
  }

  const renderTopTab=()=>{
    return(
      <View style={{flexDirection:"row",marginTop:25,marginLeft:5,marginBottom:15}}>

<TouchableOpacity onPress={()=>{changeCat("skills")}}>
  <View style={{alignItems:"center"}}>
    <Text style={{fontSize:16,fontFamily:GVs.fontMedium,color:catg=="skills"?"black":"#9B9B9B"}}>Skills</Text>
    {catg=="skills" && <utils.vectorIcon.MaterialCommunityIcons name="circle"  size={9} color={"#007069"} style={{alignSelf:"center",marginTop:5}} /> }
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>{changeCat("hours")}}>
<View style={{alignItems:"center",marginLeft:25}}>
<Text style={{fontSize:16,fontFamily:GVs.fontMedium,color:catg=="hours"?"black":"#9B9B9B"}}>Hours</Text>
{catg=="hours" && <utils.vectorIcon.MaterialCommunityIcons name="circle"  size={9} color={"#007069"} style={{alignSelf:"center",marginTop:5}} /> }
</View>
</TouchableOpacity>

      </View>
    )
  }

  const renderDateTimePicker=()=>
  {
    return(
   <DateTimePickerModal
          isVisible={dpv}
          mode='date'
          date={cd2?moment(date2).toDate():moment(date).toDate()}
          itemStyle={{
           backgroundColor: "#007069"            
          }}
          //minimumDate={new Date()}
          onConfirm={(d)=>{setDate(d)}}
          onCancel={()=>{setdpv(false);setcd2(false)}}
          />
    )
  }

  const renderMonthYearPicker=()=>
  {
    return(
      <Modal
    animationType='fade'
    // transparent={true}
    visible={myv}
    >

<MonthSelectorCalendar
   //  selectedDate={"jul 2021"}
      onMonthTapped={(d) =>setDate(d)} 
  />
    
 
 <TouchableOpacity style={{alignSelf:"center",marginTop:50}} onPress={()=>{setmyv(false)}}>
 <Text style={{color:"red",textDecorationLine:"underline",alignSelf:"center",fontSize:18}}>
Close
 </Text>
 </TouchableOpacity>

  </Modal>
 
    )
  }
 
  const renderSkills=()=>{

    let cs=0;
    let ics=0;
    let ts=0;

    let csn=[]
    let icsn=[]

    if(skill.length>0){
     
    skill.map((e,i,a)=>{
 
      console.log("eee : ",e)

     if(val=="all"){

      if(e.s.length>0){
        e.s.map((ee,ii,aa)=>{
        ts++;
        if(ee.progress==1){
          csn.push({name:ee.name})
         cs ++;
        }
        if(ee.progress<1){
          ics ++;
          icsn.push({name:ee.name})
         }
        })
      }
    
     }else{

    if(e.uid==val){
      if(e.s.length>0){
        e.s.map((ee,ii,aa)=>{
        ts++;
        if(ee.progress==1){
          csn.push({name:ee.name})
         cs ++;
        }
        if(ee.progress<1){
          ics ++;
          icsn.push({name:ee.name})
         }
        })
      }
    }
      

     }

    
    })

  }


      const skilldata = [
      {
        name: "Complete",
        number: cs,
        color: "#007069",
        legendFontColor: "#7F7F7F",
        legendFontSize: 14
      },
      {
        name: "InComplete",
        number: ics,
        color: "rgba(255, 39, 86, 0.68)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 14
      },
    ];


    if(val!="all"){
    return(
      <View style={{marginBottom:20}}>
{skill.length>0?(
  <PieChart
 style={{padding:5,margin:5}}
  data={skilldata}
  width={Window.Width-5}
  height={220}
  chartConfig={piechartConfig}
  accessor={"number"}
  hasLegend={true}
  backgroundColor={"transparent"}
  center={[0, -20]}
  absolute
/>
):(
  <Text style={{marginTop:"20%",color:"silver",fontSize:28,alignSelf:"center"}}>Empty</Text>
)}

{skill.length>0 && 
(
<View style={{paddingLeft:7,paddingRight:7,marginLeft:12,marginRight:7 }}> 

<View>
<Text style={{fontFamily:GVs.fontMedium,fontSize:16,color:"black"}}>
Total Skills : 
</Text>
<Text style={{fontSize:14}}>
       {ts} 
    </Text>
</View>

 <View>
<Text style={{fontFamily:GVs.fontMedium,fontSize:16,color:"black",marginTop:20}}>
Completed Skills : 
</Text>

 
{csn.length>0 && csn.map((e,i,a)=>{ 
    return (
      <Text style={{fontSize:14,flex:1}}>
       {e.name} 
    </Text>
      )
}

)}
</View>


<View style={{marginTop:20}}> 
<Text style={{fontFamily:GVs.fontMedium,fontSize:16,color:"black"}}>
InComplete Skills : 
</Text>


{icsn.length>0 && icsn.map((e,i,a)=>{ 
    return (
      <Text style={{fontSize:14,flex:1}}>
       {e.name} 
    </Text>
      )
}

)}
</View>


</View>
)
}

 
</View> 
    )
}else{
 return <Text style={{fontSize:18,color:"silver",marginTop:"40%",alignSelf:"center"}} >Please select any student</Text>
}

  }

  const category=()=>{

    let d="";
    let d2="";

    if(cat=="day"){
     d  = date;
     d2 = date2;
    }
    if(cat=="week"){
      d = mdate;
     }
     if(cat=="month"){
      d = ydate;
     }
  
    return(
      <View>

      <View style={{backgroundColor:"#ebebeb",height:40,borderRadius:20,alignSelf:"center",flexDirection:"row",alignItems:"center"}}>

<TouchableOpacity onPress={()=>setcat("day")} style={{backgroundColor:cat=="day"?"#007069":"#ebebeb",alignItems:"center",justifyContent:"center",width:90,height:40,borderTopLeftRadius:20,borderBottomLeftRadius:20,borderRightWidth:0.5,borderColor:"silver"}}>
  <Text style={{fontFamily: cat=="day"?GVs.fontMedium:null,color:cat=="day"?"white":"black",fontSize: cat=="day"?18:16}}>Day</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>setcat("week")} style={{backgroundColor:cat=="week"?"#007069":"#ebebeb",alignItems:"center",justifyContent:"center",width:90,height:40,borderRightWidth:0.5,borderColor:"silver"}}>
<Text style={{fontFamily: cat=="week"?GVs.fontMedium:null,color:cat=="week"?"white":"black",fontSize: cat=="week"?18:15}}>Week</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>setcat("month")} style={{backgroundColor:cat=="month"?"#007069":"#ebebeb",alignItems:"center",justifyContent:"center",width:90,height:40,borderTopRightRadius:20,borderBottomRightRadius:20}}>
<Text style={{fontFamily: cat=="month"?GVs.fontMedium:null,color:cat=="month"?"white":"black",fontSize: cat=="month"?18:15}}>Month</Text>
</TouchableOpacity>


      </View>

      {cat!=="month"&&(
        <View  style={{alignSelf:"flex-end",marginTop:15,marginRight:22,alignItems:"center"}}>
      <TouchableOpacity onPress={()=>{ cat=="day"?setdpv(true):cat=="week"?setmyv(true):null}}>
      <Text style={{textTransform:"capitalize",fontSize:12}}>{d}</Text>
      </TouchableOpacity>

{cat=="day"&&<View style={{backgroundColor:"silver",height:6,width:1.5,alignSelf:"center",marginTop:8}} /> }

      {cat=="day"&&(
      <TouchableOpacity onPress={()=>{setdpv(true),setcd2(true)}}>
      <Text style={{textTransform:"capitalize",fontSize:12,marginTop:5}}>{d2}</Text>
      </TouchableOpacity>
      )}

      </View>
      )}
    
{cat=="month" &&(
  <ModalSelector
  animationType="slide"
  data={yearData}
  scrollViewAccessible={true}
  sectionTextStyle={{fontSize:26,color:"yellow",fontWeight:"bold"}} 
  cancelTextStyle={{fontSize:22,color:"white"}}
  initValue={ydate} 
  selectStyle={{backgroundColor:null,width:50,alignSelf:"flex-end",marginTop:15,marginRight:30,borderColor:null}}
  optionContainerStyle={{backgroundColor:"#007069",borderRadius:20,width:250,alignSelf:"center"}}
  optionTextStyle={{color:"white"}}
  initValueTextStyle={{color:"black",fontSize:12}}
  backdropPressToClose={true}
  cancelStyle={{backgroundColor:"#007069",borderRadius:20,width:280,alignSelf:"center"}}
  onChange={(option)=>{setydate(option.value)}} />

)}

      </View>
 
    )
  }

  const renderDayBar=()=>{

    let dateArr = [];  
      let valArr = []; 
      // let sArr = [];
      let chk=false
      let th=0;
      let ms=0;

    if(cat=="day"){
      
    
      let pd=""
      let nd=""

      var a = moment(date);
      var b = moment(date2);
      let c= moment(a).isAfter(b)

if(c){
pd=moment(date2)
nd=moment(date)
}else{
pd=moment(date)
nd=moment(date2)
}


var currentDate = pd;
var stopDate    = nd;



while (currentDate <= stopDate) {

  th=0;
  ms=0;


// let s={ E:"Empty"};

    let cd=moment(currentDate).format("D MMMM Y");
    let daylabel=moment(currentDate).format("D MMM");

    if(skill.length>0){

      skill.map((e,i,a)=>{
 
      
       
        if(val=="all"){
    
         if(e.s.length>0){
    
           e.s.map((ee,ii,aa)=>{
    
         
     

             ee.task.map((t,index,a)=>{
               
    
               if(t.work.length>0){
                t.work.map((w,index,a)=>{
              
    
         let date=moment(w.D).format("D MMMM Y");
    
           if(cd==date){
    
             
    
             if(w.E!=""){
              console.log("work hoursessss : ",w.hours);
             chk=true;
              //hours mili scnd me ha use hours me convert kr k value me dal do related date ke
             th=th+w.hours; //total hours
              //convert to hour
            //  s= w
           } 
           }
    
                 })
               }
    
             })
          
           })
         }
       
        }else{
    
       if(e.uid==val){
        
         if(e.s.length>0){
    
           e.s.map((ee,ii,aa)=>{
    
         
          
             ee.task.map((t,index,a)=>{
    
      
    
               if(t.work.length>0){
                t.work.map((w,index,a)=>{
                 // console.log("w: ",w);
    
    
         let date=moment(w.D).format("D MMMM Y");
    
           if(cd==date){
     
             // console.log("ee: ",ee);
             // console.log("t: ",t);
    
             if(w.E!=""){

          console.log("work hoursessss : ",w.hours);
             chk=true;
              //hours mili scnd me ha use hours me convert kr k value me dal do related date ke
             th=th+w.hours; //total hours
              //convert to hour
            //  s= w
           } 
           }
    
                 })
               }
    
             })
          
           })
         }
    
       }
         
    
        }
    
       
       })
   

ms= th/3600000
}


 
//  sArr.push(s)
 dateArr.push(daylabel)
 valArr.push(ms)
// valArr.push(ms % 1 == 0 ? ms : ms.toFixed(4) )
 currentDate = moment(currentDate).add(1, 'days');
}


console.log("th : ",th)
 
}

if(val!="all"){
 
    return(
      <View>

    {chk==true && (
      <View>
        
      <VerticalBarGraph
  data={valArr}
  labels={dateArr}
  width={Window.Width-30}
  height={220}
  barRadius={5}
  c={cat}
  barWidthPercentage={0.55}
  barColor='#007069'
  baseConfig={{
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'left',
      prefix: '',
      fontSize:14
    },
    yAxisLabelStyle: {
      fontSize:8,
      textTransform:"lowercase"
    }
  }}
  style={{
    marginBottom: 20,
    padding: 5,
    marginTop:20,
    margin:5,
    alignSelf:"center",
    paddingTop: 20,
    borderRadius: 20,
    backgroundColor: `#ebebeb`,
    width: Window.Width - 20
  }}
/>

 
<View>
<Text style={{fontSize:14,alignSelf:"center",color:"#999999"}}>
  Total num Of working hours in a Day : {numOfHourseWorkDay}
</Text>
</View>


      </View>
    )}  

    {chk==false && (
      <Text style={{alignSelf:"center",fontSize:16,marginTop:"30%",color:"silver"}}>No data found btw these days</Text>
    )} 

</View>
    )
}else
{
 return  <Text style={{fontSize:18,color:"silver",marginTop:"30%",alignSelf:"center"}} >Please select any student</Text>
}
  }

  const renderWeekBar=()=>{

    if(val!=="all"){
      return(
        <View>
        <VerticalBarGraph
    data={[42,48,35,48]}
    labels={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
    width={Window.Width-30}
    height={220}
    barRadius={5}
    barWidthPercentage={0.55}
    barColor='#007069'
    baseConfig={{
      hasXAxisBackgroundLines: false,
      xAxisLabelStyle: {
        position: 'left',
        prefix: '',
        fontSize:14
      },
      yAxisLabelStyle: {
        fontSize:14
      }
    }}
    style={{
      marginBottom: 20,
      padding: 5,
      marginTop:20,
      margin:5,
      alignSelf:"center",
      paddingTop: 20,
      borderRadius: 20,
      backgroundColor: `#ebebeb`,
      width: Window.Width - 20
    }}
  />
  
   
  <View>
  <Text style={{fontSize:14,alignSelf:"center",color:"#999999"}}>
    Total num Of working hours in a week : {numOfHourseWorkWeek}
  </Text>
  </View>
  
  </View>
      )
    }else{
 return <Text style={{fontSize:18,color:"silver",marginTop:"40%",alignSelf:"center"}} >Please select any student</Text>
}
    
  }

  const renderMonthBar=()=>{
    if(val!=="all"){
    return(
      <View>
     <VerticalBarGraph
      data={[100,190,120,190,192,80,192,192,192,192,192,192]}
     labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Nov','Oct','Dec']}
  width={Window.Width-20}
  height={200}
  barRadius={4}
  barWidthPercentage={0.6}
  barColor='#007069'
  baseConfig={{
    hasXAxisLabels:true,
    hasYAxisLabels:true,
    xAxisLabelCount:4,
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'left',
      prefix: '',
      fontSize:12,
      decimals:0,
      // suffix:""
    },
    yAxisLabelStyle: {
     fontSize:11,
    }
  
  }}
  style={{
    marginBottom: 20,
    marginTop:20,
    alignSelf:"center",
    paddingTop: 20,
    paddingBottom:20,
    borderRadius: 20,
    backgroundColor: `#ebebeb`,
    width: Window.Width - 10
  }}
/>
<View>
<Text style={{fontSize:14,alignSelf:"center",color:"#999999"}}>
  Total num of working hours in a month : {numOfHourseWorkMonth}
</Text>
</View>
      </View>

    )
  }else{
    return <Text style={{fontSize:18,color:"silver",marginTop:"40%",alignSelf:"center"}} >Please select any student</Text>
   }
  }
 
  const renderReports=()=>{
   
    return(
      <View style={{marginBottom:20}}>
     {category()}  
   {cat=="day" && !loader  && renderDayBar()} 
    {cat=="week" && renderWeekBar()}
    {cat=="month"  && renderMonthBar()}  
     </View>
    )
  }

  const renderDropDown=()=>{
   
    let si = [];
    if(allUsers.length>0){
     allUsers.map((e,i,a)=>{
     let fn  =  e.FirstName || ""
     let ln  =  e.LastName || ""
     let name= fn+" "+ln 
     const obj={label:name,value:e.id}
     si.push(obj)
     })
    }
   
    return(
<View style={{marginLeft:5}}>

<DropDownPicker
items={si||[]} 
searchable={true}
defaultValue={std} 
onChangeItem={item =>setstd(item.value)}
searchablePlaceholder="Search Student"
searchablePlaceholderTextColor="gray"
searchableError={() => <Text>Not Found</Text>}
    placeholder="Select Student"
   placeholderStyle={{ textAlign: 'center'}}
   containerStyle={{width: 170, height:40}}
  dropDownStyle={{backgroundColor: '#fafafa'}}
/> 

{val!="all" &&(
  <TouchableOpacity onPress={()=>{setstd(null)}}  
 style={{position:"absolute",right:10,top:10}}
>
  <Text style={{color:"black",fontSize:14,textDecorationLine:"underline"}}>Clear</Text>
</TouchableOpacity>
)}
      </View>
    )
  }


  return (
      <View style={styles.container}> 
 <utils.Loader loader={loader} />
<View style={{paddingLeft:7,paddingRight:7,marginLeft:7,marginRight:7,marginTop:5}}>
<utils.Header  nav={props.navigation} type=""   />
</View> 
<View style={{padding:7,margin:7}}>   
 <View style={{marginLeft:5}}> 
 <utils.HeaderTitle   title="Reports"  message={"View The Reports"}   type="headertitle" /> 
 </View>
 {dpv && renderDateTimePicker()}
 {myv && renderMonthYearPicker()}
 {renderTopTab()}
 {renderDropDown()}
 </View>

<ScrollView>
 {catg=="skills"&&renderSkills()}
 {catg=="hours"&&renderReports()}
 </ScrollView>
  </View>
      );

}


 
  