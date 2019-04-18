import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerContentQuery } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  Serverurl = "http://127.0.0.1:8000/api/user_reg";
  loginurl = "http://127.0.0.1:8000/api/user_login";
  profileurl = "http://127.0.0.1:8000/api/get_user_detail";
  ContactusUrl = "http://127.0.0.1:8000/api/contact_us";
  forgetpassurl = "http://127.0.0.1:8000/api/forget_password";
  constructor(private http: HttpClient) { }
  register(Userdata: any) {
    return this.http.post(this.Serverurl, Userdata);
  }

  login(Userdata: any) {
    return this.http.post(this.loginurl, Userdata);
  }
  profile(UserId: any) {
    console.log(UserId);
    return this.http.post(this.profileurl, UserId,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      });
  }

  contactus(Userdata:any)
  {
    return this.http.post(this.ContactusUrl,Userdata);
  }
  
  forgetpass(Userdata:any)
  {
    return this.http.post(this.forgetpassurl,Userdata);
  }
}
