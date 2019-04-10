import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerContentQuery } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ConfigService 
{
  Serverurl = "http://local.lcm.com/api/user_reg";
  loginurl = "http://local.lcm.com/api/user_login";
  constructor(private http:HttpClient) {}
    register(Userdata:any)
    {
      return this.http.post(this.Serverurl,Userdata);
    }

    login(Userdata:any)
    {
      return this.http.post(this.loginurl,Userdata);
    }
}
