import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CategorytypeComponent } from './categorytype.component';
import { NewstypeComponent } from './newstype.component';
import { CasestudyComponent } from './casestudy.component';
import { ContactComponent } from './contact.component';
import { CategoryComponent } from './category.component';
import { RealestateComponent } from './realestate.component';
import { CorporateComponent } from './corporate.component';
import { CriminaldefenseComponent } from './criminaldefense.component';
import { FamilyComponent } from './family.component';
import { ImmigrationComponent } from './immigration.component';
import { EmploymentComponent } from './employment.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Relawyer1Component } from './relawyer1.component';
import { Relawyer2Component } from './relawyer2.component';
import { UploadComponent } from './upload.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProfilestudentComponent } from './profilestudent.component';
import { ProfileclientComponent } from './profileclient.component';
import { ForgetpasswordComponent } from './forgetpassword.component';
import {HttpClientModule} from '@angular/common/http';

import { LogoutComponent } from './logout.component';
import { DownloadComponent } from './download.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategorytypeComponent,
    NewstypeComponent,
    CasestudyComponent,
    ContactComponent,
    CategoryComponent,
    RealestateComponent,
    CorporateComponent,
    CriminaldefenseComponent,
    FamilyComponent,
    ImmigrationComponent,
    EmploymentComponent,
    Relawyer1Component,
    Relawyer2Component,
    UploadComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfilestudentComponent,
    ProfileclientComponent,

    ForgetpasswordComponent,
    LogoutComponent,
    DownloadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
