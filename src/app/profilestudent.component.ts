import { Component, OnInit } from '@angular/core';

import { ConfigService } from './config.service';
import { Demoform } from './demoform';


@Component({
  selector: 'app-profilestudent',
  templateUrl: './profilestudent.component.html',
  styleUrls: ['./profilestudent.component.css']
})
export class ProfilestudentComponent implements OnInit {


  UserId: any;
  val: any[];
  Userdetails: any;
  demoform: Demoform;
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.val = [];
    this.UserId = sessionStorage.getItem('UserId');
    console.log(this.UserId);
    this.config.profile(this.UserId).subscribe(
      (response: {}) => {
        console.log('success!!', response);
        this.demoform=response as Demoform;

        console.log(this.demoform);
      },
      (error) => { console.error("error", error) });
  }
}


