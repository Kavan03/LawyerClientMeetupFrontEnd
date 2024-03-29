import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about.component';
import { HomeComponent } from '../home.component';
import { RealestateComponent } from '../realestate.component';
import { CorporateComponent } from '../corporate.component';
import { CriminaldefenseComponent } from '../criminaldefense.component';
import { EmploymentComponent } from '../employment.component';
import { FamilyComponent } from '../family.component';
import { ImmigrationComponent } from '../immigration.component';
import { NewstypeComponent } from '../newstype.component';
import { ContactComponent } from '../contact.component';
import { UploadComponent } from '../upload.component';
import { Relawyer1Component } from '../relawyer1.component';
import { Relawyer2Component } from '../relawyer2.component';
import { LoginComponent } from '../login.component';
import { RegisterComponent } from '../register.component';
import { ProfileComponent } from '../profile.component';
import { ProfileclientComponent } from '../profileclient.component';
import { ProfilestudentComponent } from '../profilestudent.component';
import { ForgetpasswordComponent } from '../forgetpassword.component';

import { LogoutComponent } from '../logout.component';
import { DownloadComponent } from '../download.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'realestate', component: RealestateComponent },
  { path: 'corporate', component: CorporateComponent },
  { path: 'criminaldefense', component: CriminaldefenseComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'immigration', component: ImmigrationComponent },
  { path: 'newstype', component: NewstypeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'relawyer1', component: Relawyer1Component },
  { path: 'relawyer2', component: Relawyer2Component },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profileclient', component: ProfileclientComponent },
  { path: 'profilestudent', component: ProfilestudentComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },

  { path: 'logout', component: LogoutComponent },
  { path: 'download_case', component: DownloadComponent}



  


  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }