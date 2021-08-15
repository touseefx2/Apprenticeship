import { observable,makeObservable,action   } from "mobx";
import moment from "moment";


class  Store {

constructor(){
    makeObservable(this) //if use latest version of mobx it is must add to rerdr cmpnt aftr state chnge
  }

  @observable user = ""      //user data
  @observable skill = []    //specific user k all skill with  us skill se rltd sprvsr id
  @observable room = []    //chat rooms
  @observable allSup = "" //spcfc user k all sprvsr

  @observable catg = "skills"      //user data


  @observable allSkills = []    //sprsr stdns k  all skill
  @observable allUsers = []     //spcfc sprvsr k all user
  
//cat in report

@action changeCat=(obj)=>{ 
  this.catg=obj;
}

 //users view 

 //suprvsr
 @action setAllSup=(obj)=>{ 
   this.allSup=obj;
}


@action setRoom=(obj)=>{ 
  this.room=obj;
}

@action addRoom=(obj)=>{ 
  this.room.push(obj)
}

@action  setMessagesInRoom=(i,msg,f,p,t)=>{ 
  this.room[i].messages.push(msg)

  if(t!=""){
    this.room[i].last_Message=t;
    this.room[i].updatedAt=new Date().toString()
  }

  if(p!=""){
    this.room[i].last_Message="Photo";
    this.room[i].updatedAt=new Date().toString()
  }

  if(f!=""){
    this.room[i].last_Message="File";
    this.room[i].updatedAt=new Date().toString()
    
  }

}

@action  deleteRoomInRooms=(i)=>{
  this.room.splice(i,1)
}

@action setRoomSort=()=>{
  this.room.sort((a, b) => {return (moment(b.updatedAt)).diff(moment(a.updatedAt)) } )
 }
  //skills
  
  @action setskill =(obj)=>{ 
      this.skill=obj
  }
 
  @action changeSkillName =(obj,i)=>{
    this.skill[i].name=obj  
}
  
  @action addNewSkill =(obj)=>{
  this.skill.push(obj) //is pe skill again cal to ni ho ga lkn agr rendr me direct map kya hwa to latest all value dkhae ga
//agr chhate ho is me he chnage ho kahen or to wo render me must ho skill 
 //or
    // let arr= [...this.skill]
    // arr.push(obj)
    // this.skill=arr;  //is me useefc me agr change ata to [skill] again cal kr lete beshak cmpnnt inmount na hwa ho 
}

@action submitSkill =(si,ti,v)=>{
   this.skill[si].e.task[ti].submit=v;
   this.skill[si].e.task[ti].createdAt= new Date();
}

@action addDataInSkill =(si,ti,v)=>{
  this.skill[si].e.task[ti].data=v;
}

@action changeDataInSkill =(si,ti,v)=>{
  this.skill[si].e.task[ti].data=v;
}

@action resubmitDataInSkill =(si,ti,s,r)=>{
  this.skill[si].e.task[ti].submit=s;
  this.skill[si].e.task[ti].result=r;
  this.skill[si].e.task[ti].createdAt= new Date();
}

@action removeDataInSkill =(si,ti,index)=>{
  this.skill[si].e.task[ti].data.splice(index, 1);
}
  
  
  @action addNewTaskInSkill =(obj,item)=>{
     item.task.push(obj) ////is pe skill again cal to ni ho ga lkn agr rendr me direct map kya hwa to latest all value dkhae ga
}

//task

 @action addObjinTaskWork =(si,ti,v)=>{
  this.skill[si].e.task[ti].work.push(v) 
 }

 @action changeValueinTaskWork =(si,ti,wi,v)=>{
   
   this.skill[si].e.task[ti].work[wi]=v;
  // let arr = {...this.user}
  // arr.work.push(v)
  // this.user =arr
 }

  //user
  
  @action setuser =(obj)=>{ 
   this.user=obj
  }

  @action addObjinUserWork =(v)=>{
   
    let arr = {...this.user}
    arr.work.push(v)
    this.user =arr
   }

   @action changeObjinUserWork =(i,obj)=>{
    let arr = {...this.user};
    arr.work[i]=obj;
    this.user =arr
    
   }


   @action setEndTimeInUserWork =(i,E,et)=>{
    let arr = {...this.user};
    arr.work[i].E=E;
    arr.work[i].endTime=et;
    this.user =arr
   }

 
 
  //sprvse view

  //all user for specific sprvsr
  @action setAllUsers =(obj)=>{ 
    this.allUsers=obj
   }
   
   @action addAllUsers =(obj)=>{
    if(obj){
      this.allUsers.push(obj)
    }
  }

   @action setAllSkills =(obj)=>{
      this.allSkills=obj
  }

  @action addNewSkillInAllSkills =(obj)=>{
    this.allSkills[0].s.push(obj) //is pe skill again cal to ni ho ga lkn agr rendr me direct map kya hwa to latest all value dkhae ga
  //agr chhate ho is me he chnage ho kahen or to wo render me must ho skill 
   //or
      // let arr= [...this.skill]
      // arr.push(obj)
      // this.skill=arr;  //is me useefc me agr change ata to [skill] again cal kr lete beshak cmpnnt inmount na hwa ho 
  }

  @action  changeDataInAllSkill =(i,si,ti,v)=>{
    this.allSkills[i].s[si].task[ti].data=v; 
   }
  
   @action submitAllSkill =(i,si,ti,fb,v)=>{
    this.allSkills[i].s[si].task[ti].result=v;
    this.allSkills[i].s[si].task[ti].feedback=fb;
 }
 

}
 
 export default new  Store();

 
 