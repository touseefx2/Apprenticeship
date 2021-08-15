

//const report=[]
//const skill=[]
 
let report=null;
const chatrooms=[]
  
 

//database data
let users=[
//user a to e

   {
   FirstName:"Touseef",
   LastName:"Amjad",
   email:"a@a.com",
   password:"aaaaaa",
   type:"user",
   sup:[{sid:"456"},{sid:"654"},{sid:"666"}], //supervisor
   id:123,
   photo:require("../assets/supervisor_avatar.png"),
   },

   {
      FirstName:"Wajeeh",
      LastName:"Ahmed",
      email:"b@b.com",
      password:"aaaaaa",
      type:"user",
      sup:[{sid:"456"},{sid:"654"}], //supervisor
      id:124,
      photo:require("../assets/supervisor_avatar.png"),
      },

      {
         FirstName:"Abdullah",
         LastName:"Saeed",
         email:"c@c.com",
         password:"aaaaaa",
         type:"user",
         sup:[{sid:"456"}], //supervisor
         id:125,
         photo:require("../assets/supervisor_avatar.png"),
         },

         {
            FirstName:"Rameeza",
            LastName:"Majeed",
            email:"aa@aa.com",
            password:"aaaaaa",
            type:"user",
            sup:[{sid:"456"},{sid:"654"}], //supervisor
            id:126,
            photo:require("../assets/supervisor_avatar.png"),
            },

         {
            FirstName:"Amjad",
            LastName:"Ali",
            email:"bb@bb.com",
            password:"aaaaaa",
            type:"user",
            sup:[{sid:"456"},{sid:"654"},{sid:"666"}], //supervisor
            id:127,
            photo:require("../assets/supervisor_avatar.png"),
            },
         
               {
                  FirstName:"Bilal",
                  LastName:"Saeed",
                  email:"cc@cc.com",
                  password:"aaaaaa",
                  type:"user",
                  sup:[{sid:"456"}], //supervisor
                  id:128,
                  photo:require("../assets/supervisor_avatar.png"),
                  },

                  {
                     FirstName:"atif",
                     LastName:"aslam",
                     email:"d@d.com",
                     password:"aaaaaa",
                     type:"user",
                     sup:[{sid:"666"}], //supervisor
                     id:129,
                     photo:require("../assets/supervisor_avatar.png"),
                     },

                     {
                        FirstName:"Danial",
                        LastName:"Mughal",
                        email:"e@e.com",
                        password:"aaaaaa",
                        type:"user",
                        sup:[], //supervisor
                        id:130,
                        photo:require("../assets/supervisor_avatar.png"),
                        },

  //sprsvr f to h   
   {
      FirstName:"Farah",
      LastName:"Tahir",
      email:"f@f.com",
      password:"aaaaaa",
      type:"supervisor",
      id:456,
      photo:"",
      },
      {
         FirstName:"Hamza",
         LastName:"Tahir",
         email:"g@g.com",
         password:"aaaaaa",
         type:"supervisor",
         id:654,
         photo:require("../assets/supervisor_avatar.png"),
         },
         {
            FirstName:"Kamran",
            LastName:"Akbar",
            email:"h@h.com",
            password:"aaaaaa",
            type:"supervisor",
            id:666,
            photo:""
         //   photo:require("../assets/supervisor_avatar.png"),
            }
   ];
   
const skills=[
 
{
   uid:129,
   sid:666,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"You design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
,
{
   uid:128,
   sid:456,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
,
{
   uid:127,
   sid:456,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
,
{
   uid:127,
   sid:654,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
,
{
   uid:127,
   sid:666,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
,
{
   uid:126,
   sid:456,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
,
{
   uid:126,
   sid:654,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      
   ]
}
,
{
   uid:125,
   sid:456,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-06T10:29:15.153Z", "E": "2021-08-06T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   
   ]
}
,
{
   uid:124,
   sid:456,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
 
   ]
}
,
{
   uid:124,
   sid:654,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   
   ]
}
,
//main
{
   uid:123,
   sid:456,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-07T10:29:15.153Z", "E": "2021-08-07T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null,   
               work:[{"D": "2021-08-12T10:29:15.153Z", "E": "2021-08-12T10:29:46.582Z", "hours": 81000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-07T10:29:15.153Z", "E": "2021-08-07T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-06T10:29:15.153Z", "E": "2021-08-06T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
,
{
   uid:123,
   sid:654,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"You design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"civil engineer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Petroleum Engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Programmer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Plumber",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
},
{
   uid:123,
   sid:666,
   s:[
      {
         name:"Designer",
         description:"I Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"", //for sbsm/resbmt date
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
                data:[]
            },
            {
               name:"Drawe Keyboard",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:false,
               createdAt:"",
               result:null, 
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:false,
               result:null,  
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:false,
               result:null,   
               createdAt:"",
               work:[],
               data:[],
               feedback:""
            },
            {
               name:"App Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:null,  
               createdAt:"2021-08-10T08:29:15.153Z",
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%202.pdf?alt=media&token=6c75ffc0-b607-4955-bdff-de2ed1c20b33",name:"Math2.pdf"}]
            },
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Logo Design",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Draw Paint",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               result:false, 
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },{
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,
               createdAt:"2021-08-10T10:29:15.153Z",  
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            },
            {
               name:"Design Signup",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:false,   
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"Your design is not responsive",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            }
     
         ]
      },
      {
         name:"Electrical engineer",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               submit:false,
               result:null,  
               createdAt:"",
               feedback:"",
               work:[],
                data:[]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:null, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:false,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      },
      {
         name:"Developer",
         description:"You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
      {
         name:"Hacker",
         description:"If you are using React Native Fetch to make HTTP API calls in React Native then Axios is the other option that you can explore. You can make any HTTP calls using Axios in React Native.",
         progress:0,
         task:[
            {
               name:"Login Screen UI",
               hours:"",
               minutes:"40",
               require:"Text",
               createdAt:"2021-08-10T10:29:15.153Z",
               submit:true,
               result:true,  
               feedback:"",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T14:50:46.582Z", "hours": 51000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/math%201.pdf?alt=media&token=f0cbce76-99a7-4550-888e-b4d8f67e7a35",name:"Math1.pdf"},{uri:"https://console.firebase.google.com/u/4/project/apprenticeship-33975/storage/apprenticeship-33975.appspot.com/files",name:"Math2.pdf"},{text:"A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs. A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs."}]
            },
            {
               name:"Drawer Navigation UI",
               hours:"1",
               minutes:"",
               require:"Photo",
               submit:true,
               createdAt:"2021-08-10T10:29:15.153Z",
               result:true, 
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 21000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(1).jpeg?alt=media&token=c8d2adc4-efeb-4fec-b849-254036158887"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(2).jpeg?alt=media&token=1b729abe-7935-49df-9ee0-988634018efe"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM%20(3).jpeg?alt=media&token=e10e5255-8a36-4afc-acde-a364fdac833e"},{name:"",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Image%202021-08-06%20at%2012.09.22%20PM.jpeg?alt=media&token=5e7b33c9-5e96-4c60-832b-f1551eb505a6"}]
            },
            
            {
               name:"Create Calender UI",
               hours:"2",
               minutes:"",
               logo:require("../assets/task.png"),
               require:"Video",
               submit:true,
               result:true,   
               createdAt:"2021-08-10T10:29:15.153Z",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 31000, "latitude": 33.6423605, "longitude": 72.9833085}],
               feedback:"",
               data:[{name:"Video1.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v1.mp4?alt=media&token=06bd0b04-2b23-4a76-ae29-29b5b9adbefa",play:false,pause:false},{name:"Video2.mp4",uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/v2.mp4?alt=media&token=59b93431-6b58-4a11-a804-1ffc756cb41e",play:false,pause:false}]
            },
            {
               name:"Animated UI",
               hours:"2",
               minutes:"",
               require:"Audio",
               submit:true,
               result:true,  
               createdAt:"2021-08-10T10:29:15.153Z",
               feedback:"Your design is not responsive",
               work:[{"D": "2021-08-05T10:29:15.153Z", "E": "2021-08-05T10:29:46.582Z", "hours": 620000, "latitude": 33.6423605, "longitude": 72.9833085}],
               data:[{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"Saiyan.mpeg",play:false,pause:false},{uri:"https://firebasestorage.googleapis.com/v0/b/apprenticeship-33975.appspot.com/o/WhatsApp%20Audio%202021-08-06%20at%204.35.18%20PM.mpeg?alt=media&token=a21e44a7-2714-418a-ad6d-1106e535437d",name:"QaraRasha.mpeg",play:false,pause:false}]
            }
         ]
      }, 
   ]
}
 
      ]
 
let api="";

 
      //fonts
  const fontNormal="Inter-Regular";   //global font in all app
  const fontMedium="Inter-Medium";  //for sub-titile
  const fontBold="Inter-Bold";     //for tiitle
 
   
    const GVs = {
       skills,report,chatrooms,api,fontBold,fontMedium,fontNormal,users
        }
       
          export default   GVs;