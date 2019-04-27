import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadFiles: FormGroup;
  UserId: any;
  //case_stud: File;
  constructor(private route: Router,private formbuilder: FormBuilder,private httpclient:HttpClient,private config:ConfigService ) { }
 
  ngOnInit() {
    this.uploadFiles = this.formbuilder.group({
      UserId: sessionStorage.getItem('UserId'),
      title: [''],
      description: [''],
      case_study: ['']
    });
  }
  //get val() {
    //return this.uploadFiles.controls;
  //}
  selectedfile:File = null;
  onSelectedFile(event)
  {
      console.log(event.target.files);
      this.selectedfile=<File>event.target.files[0];
  }

  formfileSubmit() {
    
    const formdata = new FormData();
   // console.log(this.uploadFiles.value);
   formdata.append('UserId',this.uploadFiles.get('UserId').value);

    formdata.append('title',this.uploadFiles.get('title').value);
    formdata.append('description',this.uploadFiles.get('description').value);
    formdata.append('case_study',this.selectedfile);
    console.log(formdata);
    this.config.upload_case(formdata).subscribe(
      (data)=>{console.log("successfull",data)},
    (error)=>{console.error("error",error)});
    //this.route.navigateByUrl('');
}

}
