import { Injectable } from '@angular/core';
import { ConfigService } from './service.config.service';
//import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { lawyer } from './model/model.module';

@Injectable()
export class GetdataService {
  APIURL = "https://localhost:44380/api/User";

  constructor(private http: HttpClient) { }
  dashboard(): Observable<lawyer[]> {

    return this.http.get<lawyer[]>(this.APIURL);
  }
}
