import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private formbuilder: FormBuilder,private httpclient:HttpClient ) { }

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
    this.httpclient.post("http://127.0.0.1:8000/api/user_register", this.feedback.value, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      })
    }).subscribe(res => {
      console.log(res);
    });



  }
}


