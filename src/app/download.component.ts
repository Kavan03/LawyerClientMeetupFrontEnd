import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Downloadfile } from './downloadfile';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  UserId: any;
  val: any[];
  Userdetails: any;
  downloadfile: Downloadfile;

  constructor(private config: ConfigService) { }

  ngOnInit() {
      this.val = [];
       this.UserId = sessionStorage.getItem('UserId');
       console.log(this.UserId);
       this.config.downloadcasestudy().subscribe(
          (response: {}) => {
          console.log('success!!', response);
          this.downloadfile=response as Downloadfile;
  
           console.log(this.downloadfile);
         },
        (error) => { console.error("error", error) });
     }
    }