import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  , providers:[FormBuilder,HttpClient]
})
export class RegisterComponent implements OnInit {
  registerlawyer: FormGroup;
  registerClient: FormGroup;
  registerStudent: FormGroup;
  submitted: Boolean = false;
  isError: Boolean = false;
  id: number;

  Usertype: string;
  gender:string;
  

  constructor(private formbuilder: FormBuilder,private httpclient:HttpClient ) { }

  ngOnInit() {
    
    this.gender="male";
    this.registerlawyer = this.formbuilder.group({
      full_name: ['', Validators.required],
      gender: ['male', Validators.required],
      email: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      mobile_number: ['', Validators.required],
      password: ['', Validators.required],
      aadhar_photo: ['', Validators.required],
      lawyer_certy: ['', Validators.required],
      profile_photo: ['', Validators.required],
      usertype: ['lawyer', Validators.required],
      appointed_status:['no',Validators.required]
      

    });
    this.registerClient = this.formbuilder.group({
      full_name: ['', Validators.required],
      gender: ['male', Validators.required],
      email: ['', Validators.required],
      state: ['', Validators.required],
      mobile_number: ['', Validators.required],
      password: ['', Validators.required],
      aadhar_photo: ['', Validators.required],
      profile_photo: ['', Validators.required],
      usertype: ['client', Validators.required],
      

    });

    this.registerStudent = this.formbuilder.group({
      full_name: ['', Validators.required],
      gender: ['male', Validators.required],
      email: ['', Validators.required],
      state: ['', Validators.required],
      mobile_number: ['', Validators.required],
      password: ['', Validators.required],
      aadhar_photo: ['', Validators.required],
      profile_photo: ['', Validators.required],
      usertype: ['student', Validators.required],
      college: ['', Validators.required],
      college_id: ['', Validators.required],
      
      

    });

  }
  get vall() {


    return this.registerlawyer.controls;
  }

  FormLawyerSubmit() {

    console.log(this.registerlawyer.value);


    this.httpclient.post("http://127.0.0.1:8000/api/user_register", this.registerlawyer.value, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      })
    }).subscribe(res => {
      console.log(res);
    });



  }


  get valc() {


    return this.registerClient.controls;
  }

  FormClientSubmit() {

    console.log(this.registerClient.value);


    this.httpclient.post("http://127.0.0.1:8000/api/user_register", this.registerClient.value, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      })
    }).subscribe(res => {
      console.log(res);
    });



  }




  get vals() {


    return this.registerStudent.controls;
  }

  FormStudentSubmit() {

    console.log(this.registerStudent.value);


    this.httpclient.post("http://127.0.0.1:8000/api/user_register", this.registerStudent.value, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      })
    }).subscribe(res => {
      console.log(res);
    });



  }
 }