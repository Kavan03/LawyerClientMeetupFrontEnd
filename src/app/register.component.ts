import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';

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
  

  constructor(private route: Router,private formbuilder: FormBuilder,private httpclient:HttpClient,private config:ConfigService ) {}

  ngOnInit() {
    
    this.gender="male";
    this.registerlawyer = this.formbuilder.group({
      full_name: ['', Validators.required],
      gender: ['', Validators.required],
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
      appointed_status:['',Validators.required]
      

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


    // this.httpclient.post('http://local.lcm.com/api/user_reg', this.registerlawyer.value, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //   })
    // }).subscribe((res) => {
    //   console.log('success!!',res);
    // });

    //this.submitted = true;
    // stop here if form is invalid
    // if (this.registerlawyer.invalid) {
    //   var formData = this.registerlawyer.value;

    // this.formDataObj.userName = formData.userName;
    // this.formDataObj.password = formData.password;

    this.config.register(this.registerlawyer.value).subscribe(
      (data)=>{console.log("successfull",data)},
    (error)=>{console.error("error",error)});
    this.route.navigateByUrl('');


  

}
// else{
// this.isError=true;
// this.toastr.error('Login Error', 'Error',{timeOut : 3000});
// }
//   }


//   }


  get valc() {


    return this.registerClient.controls;
  }

  FormClientSubmit() {

    console.log(this.registerClient.value);


    this.config.register(this.registerClient.value).subscribe(
      (data)=>{console.log("successfull",data)},
    (error)=>{console.error("error",error)});
    this.route.navigateByUrl('');

    // this.httpclient.post("http://local.lcm.com/api/user_reg", this.registerClient.value, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //   })
    // }).subscribe(res => {
    //   console.log(res);
    // });



  }




  get vals() {


    return this.registerStudent.controls;
  }

  FormStudentSubmit() {

    console.log(this.registerStudent.value);

    this.config.register(this.registerStudent.value).subscribe(
      (data)=>{console.log("successfull",data)},
    (error)=>{console.error("error",error)});
    this.route.navigateByUrl('');

    // this.httpclient.post("http://local.lcm.com/api/user_reg", this.registerStudent.value, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //   })
    // }).subscribe(res => {
    //   console.log(res);
    // });



  }
 }