import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']

  , providers: [FormBuilder, HttpClient]
})
export class ForgetpasswordComponent implements OnInit {
  forgetpassword: FormGroup;
  constructor(private formbuilder: FormBuilder,private httpclient:HttpClient,private config:ConfigService) { }

  ngOnInit() {
    this.forgetpassword = this.formbuilder.group({
      email: ['', Validators.required]
    });
  }
  get valf() {
    return this.forgetpassword.controls;
  }
  iforgetpassword()
  {
    console.log(this.forgetpassword.value);

    this.config.forgetpass(this.forgetpassword.value).subscribe(
      (data)=>{console.log("successfull",data)},
    (error)=>{console.error("error",error)});

  }
}
