import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Utilities } from 'src/app/services/utilities.service';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
  message='';
  @Output() vitalsAction = new EventEmitter(true);
  @ViewChild('weightId',{static:false}) weightId!:ElementRef;
  @ViewChild('heightFeetId',{static:false}) heightFeetId!:ElementRef;
  @ViewChild('heightInchId',{static:false}) heightInchId!:ElementRef;
  @ViewChild('yob',{static:false}) yob!:ElementRef;
  @ViewChild('cm',{static:false}) cm!:ElementRef;
  isActive:string='';
  userDetail:any={
    age: {code: '', label: '', avg_age:0},
    bmi:0,
    category: "",
    currentWeight: 0,
    gender: [{value:'',code:'',isSelected:false}],
    height: {unit: '', value: 0, ischecked: false},
    heightInCM: 0,
    suggestedWeight: 0,
    updatedDate: "",
    updatedDateTime: "",
    weight: {unit: '', value:0 , ischecked: false},
    weightInKg: 0,
    yob:0
  };
  heightFoot=0;
  heightInch=.0;
  weight=0;
  selectedItem:any="";
  yearofBirth = new Date().getFullYear();
  selectedIndex=-1;
  goals;
  options =[
    {feet:'4',inch:'6',cm:'137',range:[137,138]}, 
    {feet:'4',inch:'7',cm:'140',range:[139,140,141]},
    {feet:'4',inch:'8',cm:'142',range:[142,143]}, 
    {feet:'4',inch:'9',cm:'145',range:[144,145,146,147]},
    {feet:'5',inch:'0',cm:'153',range:[148,149,150,151,152,153]},
    {feet:'5',inch:'1',cm:'155',range:[154,155,156]},
    {feet:'5',inch:'2',cm:'158',range:[157,158]},
    {feet:'5',inch:'3',cm:'160',range:[159,160,161]},
    {feet:'5',inch:'4',cm:'163',range:[162,163,164]},
    {feet:'5',inch:'5',cm:'165',range:[165,166]},
    {feet:'5',inch:'6',cm:'168',range:[167,168,169]},
    {feet:'5',inch:'7',cm:'170',range:[170,171]},
    {feet:'5',inch:'8',cm:'173',range:[172,173,174]},
    {feet:'5',inch:'9',cm:'175',range:[175,176,177]},
    {feet:'6',inch:'0',cm:'183',range:[178,179,180,181,182,183]},
    {feet:'6',inch:'1',cm:'185',range:[184,185,186]},
    {feet:'6',inch:'2',cm:'188',range:[187,188,189]},
    {feet:'6',inch:'3',cm:'191',range:[190,191,192]},
    {feet:'6',inch:'4',cm:'193',range:[193,194]},
    {feet:'6',inch:'5',cm:'196',range:[195,196,197]},
    {feet:'6',inch:'6',cm:'198',range:[198,199,200]}
];
 payload={
   gender:'',
   height:'',
   weight:'',
   age:''

 }
  isvalidated=new Array(4).fill(false);
   constructor(private utilities:Utilities,private storage:Storage) { 
     this.utilities.initStorage(storage);
   }
   compareWith : any ;
   compareWithFn(o1, o2) {
       return o1 === o2;
     };
  ngOnInit(): void {
  //  this.fetchUserDetail();
    this.utilities.getStorage("defaultData").then(res=>{
      this.userDetail.gender =res.otherMaster.gender;
      this.userDetail.height = res.otherMaster.height;
      this.userDetail.weight = res.otherMaster.weight;
     
     let resProfile = localStorage.getItem("profileData");
      // this.utilities.getStorage("profileData").then(resProfile=>{
      //   if(resProfile){
          let newRes = JSON.parse(resProfile);
          console.log("newRes::",newRes);
          
          for (let index = 0; index < this.userDetail.gender.length; index++) {
            if(this.userDetail.gender[index].code==newRes.demographic.gender.code){
              this.selectedIndex=index;
              break;
            }
          }
          if(newRes.demographic.height){
            this.userDetail.height.push(newRes.demographic.height);
            for (let index = 0; index < this.options.length; index++) {
                const seletedR = this.options[index].range.filter(item=>{
                  return Number(item)==this.userDetail.height[0].value;
                });
                if(seletedR.length>0){
                 this.selectedItem = this.options[index].cm;
                 this.payload.height = this.userDetail.height[0].value.toString();
                 break;
                }
                
            }
          }
          if(newRes.demographic.weight){
            this.userDetail.weight.push(newRes.demographic.weight);
          }
          if(newRes.demographic.age){
            this.yearofBirth = this.yearofBirth - newRes.demographic.age.avg_age;
          }
        });
    //  });
   // });

  }

  optionsFn(value){
    console.log("item",value);
    this.payload.height=value;
    this.selectedItem =value ;
  }
  selectedGender(code,value,index){
    this.selectedIndex=index;
 //  this.userDetail.gender[index].isSelected=true;
  }
  
  fetchUserDetail(res){
   // this.utilities.getStorage("userDetail").then(res=>{
      this.userDetail = res;
      console.log("this.userDetail",this.userDetail);
      if(this.userDetail.height[0].unit=='cm'){
        const heightarr = (this.userDetail.heightInCM*.0328).toFixed(1).toString().split('.');
        this.heightFoot = Number(heightarr[0]);
        this.heightInch = Number(heightarr[1]);
      }
      else{
        const heightarr = (this.userDetail.heightInCM).toString().split('.');
        this.heightFoot = Number(heightarr[0]);
        this.heightInch = heightarr[1]==undefined?0:heightarr[1];
      }
      if(this.userDetail.weight.unit=='pound'){
        this.weight = Math.round(this.userDetail.weightInKg*.453);
      }
      else{
        this.weight = this.userDetail.weightInKg;
      }
      this.yearofBirth = this.yearofBirth - this.userDetail.age.avg_age;
        console.log(this.yearofBirth);
        
  //  });
   
    
  }

  gotoPrevious(event){
      window.history.back();
  }
msgTerm;
  gotoNext(event){
    if(!this.termAccepted){
      this.msgTerm= "";
      return;
    }
    if(this.selectedIndex==-1){
      this.isvalidated[0]=true;
      return;
    }
    else{
      this.isvalidated[0]=false;
      this.userDetail.gender[this.selectedIndex].isSelected=true;
    }
    if(this.selectedItem==""){
      this.isvalidated[1]=true;
      return;
    }
    else{
      this.isvalidated[1]=false;
      if(this.userDetail.height.length==0){
        this.userDetail.height.push({unit: '', value: Number(this.payload.height), ischecked: false})
      }
      else{
       this.userDetail.height[0].value = Number(this.payload.height);
      }
    }
    if(this.weightId.nativeElement.value=='0' || this.weightId.nativeElement.value=='' || Number(this.weightId.nativeElement.value)<45 || Number(this.weightId.nativeElement.value)>150){
      this.isvalidated[2]=true;
      return;
    }
    else{
      this.isvalidated[2]=false;
      this.userDetail.weight.push({unit:'kg',value:this.weightId.nativeElement.value});
    }
    if(this.yob.nativeElement.value=='0' || this.yob.nativeElement.value=='' || Number(this.yob.nativeElement.value)<1955 || Number(this.yob.nativeElement.value)>2004){
      this.isvalidated[3]=true;
      return;
    }
    else{
      this.isvalidated[3]=false;
      this.userDetail.yob = this.yob.nativeElement.value
    }
    const passData={
      data:this.userDetail,
      yob: this.yob.nativeElement.value,
    }
    this.utilities.getStorage("registrationData").then(res=>{
      this.utilities.setStorage("registrationData",{passData:(res!=null && res.passData!=undefined)?res.passData:passData});
    });
    
  this.vitalsAction.emit({passData});
}
termAccepted=false;
isTermAccepted(e){
  this.msgTerm='';
  console.log("e",e);
  if(e){
  this.termAccepted =e;
  }
  else{
    this.termAccepted =false;
    this.msgTerm='';
  }
}
}
