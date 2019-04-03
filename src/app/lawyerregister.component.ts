import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from './service.config.service';


@Component({
  selector: 'app-lawyerregister',
  templateUrl: './lawyerregister.component.html',
  styleUrls: ['./lawyerregister.component.css']
})
export class LawyerregisterComponent implements OnInit {
register:FormGroup;
submitted :Boolean= false;
isError:Boolean=false;
id:number;
// formDataObj = { userName: "", password: "" };
//login: FormGroup;

  constructor(private formbuilder:FormBuilder,private configService: ConfigService) {

  }

  ngOnInit() {
    this.register = this.formbuilder.group({
      full_name: ['', Validators.required],
      //password: ['', [Validators.required, Validators.minLength(6)]],
      //email:['',[Validators.required]]

    });

  }
  get vall() { 
    
    
    return this.register.controls;
 }
 
    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.register.invalid) {
        var formData = this.register.value;

      // this.formDataObj.userName = formData.userName;
      // this.formDataObj.password = formData.password;

      this.configService.reg(formData).subscribe((data)=>{
        console.log("successfull")},
      (error)=>{console.log("error")});

  
  


}
    }
  }