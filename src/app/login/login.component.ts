import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:boolean=true;
  loginForm:FormGroup;


  constructor(private router:Router,private server:ServerService,private s1:ServiceService){
    this.loginForm=new FormGroup({
      userName:new FormControl(null,[Validators.minLength(3),Validators.required]),
      password:new FormControl(null,[Validators.minLength(3),Validators.required])
    })
  }

  ngOnInit(){
  }

  checkLogin(){
    if(this.loginForm.errors || this.loginForm.invalid){
      alert("Enter Username/Password");
    }
    else{
      this.server.getLogin(this.loginForm.get("userName")?.value,this.loginForm.get("password")?.value)
      .subscribe((data)=>{
        if(data==true){
          this.s1.setUserName(this.loginForm.get("userName")?.value);
          this.router.navigate(["search"]);
        }
        else{
          alert("Wrong Password");
          this.login=false;
        }
      }
      );
    }
  }
}
