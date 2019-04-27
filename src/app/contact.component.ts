import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigService } from './config.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  , providers:[FormBuilder,HttpClient]
})
export class ContactComponent implements OnInit {

  feedback: FormGroup

  submitted: Boolean = false;
  isError: Boolean = false;
  id: number;

  userdetails: any;

  constructor(private formbuilder: FormBuilder,private httpclient:HttpClient,private config:ConfigService ) { }

  ngOnInit() {

    this.feedback = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get valf() {
    return this.feedback.controls;
  }    

  formsubmit() {

    console.log(this.feedback.value);


    this.config.contactus(this.feedback.value).subscribe(
      (data)=>{
      console.log("successfull",data)},
    (error)=>{console.error("error",error)});



  }
}


