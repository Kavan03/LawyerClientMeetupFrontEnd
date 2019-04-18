import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-profilestudent',
  templateUrl: './profilestudent.component.html',
  styleUrls: ['./profilestudent.component.css']
})
export class ProfilestudentComponent implements OnInit {
  
  UserId:any;
  val:any[];
  constructor( private config: ConfigService) { }

  ngOnInit() {
   this.UserId= '{ "UserId" : 6}';
   this.val=[this.config.profile(this.UserId).subscribe(
    (data)=>{console.log("successfull",data),this.val.push(data)},
  (error)=>{console.error("error",error)})];
  }

}
