import { Injectable } from '@angular/core';
import { ConfigService } from './service.config.service';
//import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { lawyer } from './model/model.module';

@Injectable()
export class GetdataService {
  APIURL = "http://127.0.0.1:81/api/user_register";

  constructor(private http: HttpClient) { }
  dashboard(): Observable<lawyer[]> {

    return this.http.get<lawyer[]>(this.APIURL);
  }
}
