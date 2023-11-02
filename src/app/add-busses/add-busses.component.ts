import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Busses } from '../options/BusData';
import { Seats } from '../booking/Seats';

@Component({
  selector: 'app-add-busses',
  templateUrl: './add-busses.component.html',
  styleUrls: ['./add-busses.component.css']
})
export class AddBussesComponent {
  form:FormGroup;
  busSeat:Seats={};
  added:boolean=false;

  constructor(private service: ServerService){
    this.form = new FormGroup({
      busNumber: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      non_or_ac: new FormControl(null,Validators.required),
      price: new FormControl(null,[Validators.required,Validators.minLength(1)]),
      fromPlace: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      fromTime: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      toPlace: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      toTime: new FormControl(null,[Validators.required,Validators.minLength(3)])
    })
  }
  


  check(){
    if(this.form.errors || this.form.invalid){
      alert("Enter the Form Details Correctly");
    }
    else{
      this.seatsAssine();
      this.service.postBusData(this.form.value);
      this.service.postBusSeats(this.busSeat);
      this.add();
    }
  }
  seatsAssine(){
    console.log(this.form.get('busNumber')?.value);
    this.busSeat.busNumber=this.form.get('busNumber')?.value;
    this.busSeat.s1=true;
    this.busSeat.s2=true;
    this.busSeat.s3=true;
    this.busSeat.s4=true;
    this.busSeat.s5=true;
    this.busSeat.s6=true;
    this.busSeat.s7=true;
    this.busSeat.s8=true;
    this.busSeat.s9=true;
    this.busSeat.s10=true;
    this.busSeat.s11=true;
    this.busSeat.s12=true;
    this.busSeat.s13=true;
    this.busSeat.s14=true;
    this.busSeat.s15=true;
    this.busSeat.s16=true;
    this.busSeat.s17=true;
    this.busSeat.s18=true;
    this.busSeat.s19=true;
    this.busSeat.s20=true;
    this.busSeat.s21=true;
    this.busSeat.s22=true;
    this.busSeat.s23=true;
    this.busSeat.s24=true;
    this.busSeat.s25=true;
    this.busSeat.s26=true;
    this.busSeat.s27=true;
    this.busSeat.s28=true;
    this.busSeat.s29=true;
    this.busSeat.s30=true;
  }
  add() {
    this.added = true;
    setTimeout(() => {
      this.added = false;
    }, 3500);
  }

}
