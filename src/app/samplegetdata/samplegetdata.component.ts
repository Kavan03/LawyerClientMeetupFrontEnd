import { Component, OnInit } from '@angular/core';
import { lawyer } from '../model/model.module';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-samplegetdata',
  templateUrl: './samplegetdata.component.html',
  styleUrls: ['./samplegetdata.component.css']
})
export class SamplegetdataComponent implements OnInit {

  user :lawyer[];

  constructor(private configService: GetdataService) { }

  ngOnInit() {
    this.configService.dashboard().subscribe(users =>this.user =users);
  }

}
