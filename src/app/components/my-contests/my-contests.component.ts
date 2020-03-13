import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators, RequiredValidator , FormArray ,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-my-contests',
  templateUrl: './my-contests.component.html',
  styleUrls: ['./my-contests.component.css']
})
export class MyContestsComponent implements OnInit {

  iconC:string="assets/iconC.png";
  iconB:string="assets/iconB.png";
  iconP:string="assets/iconP.png";
  iconQ:string="assets/iconQ.png";


// Form
  schoolForms: FormGroup;
  schoolArray: FormArray;
  updateSchoolForm: FormGroup;
  grade:number[];
  objData:any;
  formList=[];
  allData:any;
  count = 0;
  arrayOfObj = [];
  updateData:any;
  curruntLenght:any;
  curruntData:any;
  curruntSchool:any;
  updateSelect:string;
  select:string="";
  get controls(){
    return this.schoolForms.get('schoolArray')['controls'];
  }
  Choices=[
    {name:"Cairo English School",id:1},
    {name:"British International",id:2},
    {name:"Saint George's College",id:3},
  ];


    constructor(private formBuilder: FormBuilder) {
      this.arrayOfObj.push(this.count);
      this.display();
    }

    ngOnInit(): void {
      this.grade=[1,2,3];
      this.schoolForms = this.formBuilder.group({
      schoolArray: this.formBuilder.array([ this.createItem() ])
    });

    this.updateData = new FormGroup({
      section: new FormControl(),
      className: new FormControl(),
      grade: new FormControl(),
      school: new FormControl(),
    });
    }
    createItem(): FormGroup {
      return this.formBuilder.group({
        section: ['',[Validators.required,Validators.maxLength(3)]],
        className: ['',[Validators.required,Validators.maxLength(40)]],
        grade: ['',[Validators.required]],
        school: [this.select],
      });
    }
    addItem(): void {
      this.schoolArray = this.schoolForms.get('schoolArray') as FormArray;
      this.schoolArray.push(this.createItem());
      this.count ++;
      this.arrayOfObj.push(this.count);
    }
    submit(){
      this.forLoop();
      this.reset();
    }
    // delete 3 inputs
    deleteInputs(index){
      (<FormArray>this.schoolForms.get('schoolArray')).removeAt(index);
    }
    // reset Form
    reset(){
      (<FormArray>this.schoolForms.get('schoolArray')).reset();
    }
    forLoop(){
        for (let i = 0; i < this.arrayOfObj.length; i++) {
        this.objData=this.schoolForms.get('schoolArray').value[i];
        this.objData.school=this.select;
        this.localStorage();
      }
    }
    // loaclSotrage
  localStorage(){
    if ( localStorage.getItem("schoolForm") == null) {
      if (this.objData != undefined) {
          this.formList.push(this.objData);
      }
      localStorage.setItem("schoolForm",JSON.stringify(this.formList))
    }else{
      this.formList = JSON.parse(localStorage.getItem("schoolForm"));
    if (this.objData != undefined) {
        this.formList.push(this.objData);
    }
      localStorage.setItem("schoolForm",JSON.stringify(this.formList));
    }
    this.display();
  }
  // display data
  display(){
    this.allData=JSON.parse(localStorage.getItem("schoolForm"));
  }
  // delete cards
  deleteClass(i){
    this.allData.splice(i,1)
    localStorage.setItem("schoolForm",JSON.stringify(this.allData));
  }
  // edit Card
  edit(data , length){
    this.curruntLenght = length;
    this.curruntData = data;
    this.curruntSchool = this.allData[length].school;
    this.updateData = new FormGroup({
      section: new FormControl(this.curruntData.section,[Validators.required,Validators.maxLength(3)]),
      className: new FormControl(this.curruntData.className,[Validators.required,Validators.maxLength(40)]),
      grade: new FormControl(this.curruntData.section,[Validators.required]),
      school: new FormControl(this.curruntData.school),
    });
  }
  // update card
  updateBtn(){
    this.schoolArray = this.schoolForms.get('schoolArray') as FormArray;
    this.schoolArray.push(this.updateData);
    this.allData.splice(this.curruntLenght,1,this.updateData.value);
    localStorage.setItem("schoolForm",JSON.stringify(this.allData));
  }
  // clear All Data
  ClearAll(){
    localStorage.clear();
    this.display();
  }
}
