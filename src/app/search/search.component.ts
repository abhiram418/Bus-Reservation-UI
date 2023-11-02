import { Component } from '@angular/core';
import {View} from "./Visible"
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search:FormGroup
  visible= new View();

  constructor(private router:Router,private service:ServiceService){
    this.search = new FormGroup({
      fromPlace : new FormControl("From-Place",[Validators.required,Validators.minLength(3)]),
      toPlace : new FormControl("To-Place",[Validators.required,Validators.minLength(3)]),
      date:new FormControl("Date",Validators.required),
    })
  }
  validate():boolean{
    for(let contrl in this.search.controls){
      if(this.search.get(contrl)?.untouched || this.search.get(contrl)?.errors){
        
        return false;
      }
    }
    return true;
  }
  viewOptions(){
    if(this.validate()){
      this.service.setSearchData(this.search.value);
      this.router.navigate(["/options"]);
    }
    else{
      alert("Fill all the FIELDS bellow carefully")
    }
  }
  activate(n:number){
    switch(n){
      case(1):{
        this.visible.fromVisible=true;
        break;
      }
      case(2):{
        this.visible.toVisible=true;
        break;
      }
      case(3):{
        this.visible.dateVisible=true;
        break;
      }
    }
  }
  deActivate(n:number){
    this.visible.fromVisible=false;
    let c=n;
    switch(c){
      case(1):{
        this.visible.fromVisible=false;
        break;
      }
      case(2):{
        this.visible.toVisible=false;
        break;
      }
      case(3):{
        this.visible.dateVisible=false;
        break;
      }
    }
  }
  red(){
    this.router.navigate(["profile"]);
  }
}
