import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ConfigService {
  APIURL = "https://localhost:44380/api/User";


  constructor(private http: HttpClient) { }
  reg(formData: any) {
    try {
      return this.http.post(this.APIURL, formData);
    } catch (err) {
      console.log(err);
    }
  }

}
