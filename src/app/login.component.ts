import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigService } from './config.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

  , providers: [FormBuilder, HttpClient]
})
export class LoginComponent implements OnInit {

  loginuser: FormGroup;
  submitted: Boolean = false;
  isError: Boolean = false;
  id: number;
  Usertype: string;
  data: any;

  constructor(private route: Router, private formbuilder: FormBuilder, private httpclient: HttpClient, private config: ConfigService) { }
  Userdetails: any;
  ngOnInit() {
    sessionStorage.removeItem("usertype");

    this.loginuser = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });


  }

  get vall() {
    return this.loginuser.controls;

  }

  formsubmit() {

   // console.log(this.loginuser.value);

    this.config.login(this.loginuser.value).subscribe(
      (data) => {


        this.Userdetails = data;
        //console.log(this.Userdetails.length);
        if (this.Userdetails.length > 0) {

          console.log(this.Userdetails[0].user_id);
          sessionStorage.setItem("usertype", this.Userdetails[0].role_type);
         sessionStorage.setItem("UserId", this.Userdetails[0].user_id);
          this.route.navigateByUrl('/home');
        }
        else{
          alert('Invalid Username and Password!!!');
        }




        //sessionStorage.removeItem("usertype");
        //console.log(data.data)



      },
      (error) => { console.error("error", error) });


    // this.httpclient.post("http://127.0.0.1:8000/api/user_register", this.login.value, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //   })
    // }).subscribe(res => {
    //   if(res)
    //   {

    //       sessionStorage.setItem("usertype","student")
    //       this.route.navigateByUrl('/home');
    //    }
    //   else
    //       this.route.navigate(['/login'])
    // });

    //  sessionStorage.setItem("usertype","student")
    //   this.route.navigateByUrl('/home');
  }

}

