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
  register: FormGroup;
  submitted: Boolean = false;
  isError: Boolean = false;
  id: number;


  Usertype: string;
  gender:string;

  constructor(private formbuilder: FormBuilder,private httpclient:HttpClient ) { }

  ngOnInit() {
    this.Usertype = "lawyer";
    this.gender="male";
    this.register = this.formbuilder.group({
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
    });


  }
  get vall() {


    return this.register.controls;
  }

  FormonSubmit() {

    console.log(this.register.value);


    this.httpclient.post("http://127.0.0.1:8000/api/user_register", this.register.value, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data application/json',
      })
    }).subscribe(res => {
      console.log(res);
    });



  }
}