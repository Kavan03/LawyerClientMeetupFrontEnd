import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerContentQuery } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  Serverurl = "http://local.lcm.com/api/user_reg";
  loginurl = "http://local.lcm.com/api/user_login";
  profileurl = "http://local.lcm.com/api/get_user_detail/";
  ContactusUrl = "http://local.lcm.com/api/contact_us";
  forgetpassurl = "http://local.lcm.com/api/forget_password";
  uploadcaseurl = "http://local.lcm.com/api/upload_case";
    downloadurl = "http://local.lcm.com/api/download_case";
  constructor(private http: HttpClient) { 
   
  }
  register(Userdata: any) {
    return this.http.post(this.Serverurl , Userdata );
  }

  login(Userdata: any) {
    return this.http.post(this.loginurl, Userdata);
  }
  // profile(UserId: any) {
  //   console.log(UserId);
  //   return this.http.post(this.profileurl, UserId,
  //     {
  //       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //     });
  // }

  contactus(Userdata:any)
  {
    return this.http.post(this.ContactusUrl,Userdata);
  }
  
  forgetpass(Userdata:any)
  {
    return this.http.post(this.forgetpassurl,Userdata);
  }
  profile(userid):Observable<any>
  {
    return this.http.get(this.profileurl+userid);
  }
  upload_case(Userdata:any)
  {
    return this.http.post(this.uploadcaseurl,Userdata);
  }
   downloadcasestudy():Observable<any>
  {
    return this.http.get(this.downloadurl);
  }

}
