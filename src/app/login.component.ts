import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  , providers:[FormBuilder,HttpClient]
})
export class LoginComponent implements OnInit {
   
    login: FormGroup;
    submitted: Boolean = false;
    isError: Boolean = false;
    id: number;
    Usertype: string;
    data: any;

  constructor(private route:Router,private formbuilder: FormBuilder,private httpclient:HttpClient ) { }

  ngOnInit() {
    
   
    this.login = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      
    });
  }

  get vall() {


    return this.login.controls;
  }

  formsubmit() {

    console.log(this.login.value);


    this.httpclient.post("http://127.0.0.1:8000/api/user_register", this.login.value, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      })
    }).subscribe(res => {
      if(res)
      {
        
          sessionStorage.setItem("usertype","student")
          this.route.navigateByUrl('/home');
       }
      else
          this.route.navigate(['/login'])
    });



  }
 // formsubmit():void{
   // sessionStorage.setItem("usertype","student")
    //this.route.navigateByUrl('/home');
  //}
}

