import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Cread } from '../login/LoginType';
import { Profile } from '../profile/ProfileType';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm:FormGroup;
  validUserName:any=false;
  log:Cread={"userName":"","password":""};
  profile:Profile={"userName":"","name":"","phNo":"","gender":""};

  constructor(private server:ServerService,private router:Router) {
    this.signupForm= new FormGroup({
      userName: new FormControl(null,[Validators.minLength(3),Validators.required]),
      password: new FormControl(null,[Validators.minLength(3),Validators.required]),
      name: new FormControl(null,[Validators.minLength(3),Validators.required]),
      phNo: new FormControl(null,[Validators.minLength(3),Validators.required,Validators.maxLength(10)]),
      gender: new FormControl("",Validators.required)
    })
  }
  ngOnInit(){

  }


  checkUserName(){
    this.server.checkSingup(this.signupForm.get("userName")?.value)
    .subscribe((data)=>{
      this.validUserName=data;
    })
  }
  setValues(){
    this.log={userName:this.signupForm.get("userName")?.value,password:this.signupForm.get("password")?.value}
    this.profile={userName:this.signupForm.get("userName")?.value,name:this.signupForm.get("name")?.value,phNo:JSON.stringify(this.signupForm.get("phNo")?.value),gender:this.signupForm.get("gender")?.value}
    // console.log(this.log)
    // console.log(this.profile)
  }
  check(){
    this.setValues();
    if(this.validUserName==true || this.signupForm.errors || this.signupForm.invalid){
      alert("Check the Details");
      return
    }
    else{
      this.server.addlogin(this.log);
      this.server.addProfile(this.profile);
      this.router.navigate(["login"]);
    }
  }
}
