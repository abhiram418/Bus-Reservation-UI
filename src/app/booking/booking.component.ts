import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pasengers } from './pasengers';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';
import { ServiceService } from '../service.service';
import { UserBookings } from '../past-bookings/UserBookings';
import { Seats } from './Seats';
import { BookingDetails } from '../ticket/BookingDetailsType';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  n:number=0;
  listNumber:number[]=[];
  busNumber:number=null!;
  pasengersList:pasengers[]=[];
  pasengersData:FormGroup;
  p:FormGroup;
  ready:any[]=["",""];
  Visiblity:boolean[]=[false];
  select:String[]=[];
  seatsSelected:number[]=[];
  userBookings:UserBookings={};
  seats:Seats={};
  view:boolean[]=[];
  ////////////////////////
  bookDet!:BookingDetails;
  bookng!:UserBookings;
  ///////////////////////////////////////////////////
  constructor(private route: ActivatedRoute,private router:Router,private service:ServerService,private s1:ServiceService){
    this.pasengersData=new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(3)]),
      age: new FormControl(null,[Validators.required,Validators.minLength(1)]),
      gender: new FormControl("",[Validators.required])
    })
    this.p = new FormGroup({
      a: new FormArray([])
    })
  }
  ngOnInit(){
    this.busNumber=Number(this.route.snapshot.paramMap.get("bus"));
    for (let index = 1; index < 31; index++) {
      this.select[index]="box";
    }
    for (let index = 0; index < 6; index++) {
      this.listNumber[index]=index;
    }
    this.getSeats();
  }
  get getFormArray(){
    return this.p.get("a") as FormArray;
  }
  ////////////////////////////////////////////////////
  getSeats(){
    this.service.getSeats(this.busNumber)
    .subscribe((data)=>{
      this.seats=data;
      this.view = [
        !this.seats.s1!,
        !this.seats.s2!,
        !this.seats.s3!,
        !this.seats.s4!,
        !this.seats.s5!,
        !this.seats.s6!,
        !this.seats.s7!,
        !this.seats.s8!,
        !this.seats.s9!,
        !this.seats.s10!,
        !this.seats.s11!,
        !this.seats.s12!,
        !this.seats.s13!,
        !this.seats.s14!,
        !this.seats.s15!,
        !this.seats.s16!,
        !this.seats.s17!,
        !this.seats.s18!,
        !this.seats.s19!,
        !this.seats.s20!,
        !this.seats.s21!,
        !this.seats.s22!,
        !this.seats.s23!,
        !this.seats.s24!,
        !this.seats.s25!,
        !this.seats.s26!,
        !this.seats.s27!,
        !this.seats.s28!,
        !this.seats.s29!,
        !this.seats.s30!
      ];
    })
  }
  addPasenger(){
    if(this.getFormArray.get(""+(this.n-1))?.invalid || this.getFormArray.get(""+(this.n-1))?.errors){
      alert("Enter the Pasenger : "+this.n+" details");
    }
    else{
      if(this.n==0){
        this.getFormArray.push(
          new FormGroup({
            name: new FormControl("",[Validators.required,Validators.minLength(3)]),
            age: new FormControl(null,[Validators.required,Validators.minLength(1)]),
            gender: new FormControl("",[Validators.required])
          })
        );
        this.n++;
        this.Visiblity[this.n]=false;
      }
      else{
        this.getFormArray.push(
          new FormGroup({
            name: new FormControl("",[Validators.required,Validators.minLength(3)]),
            age: new FormControl(null,[Validators.required,Validators.minLength(1)]),
            gender: new FormControl("",[Validators.required])
          })
        );
        this.Visiblity[this.n-1]=true;
        if(this.pasengersList.indexOf(this.getFormArray?.get(""+(this.n-1))!.value) == -1){
          this.pasengersList.push(this.getFormArray?.get(""+(this.n-1))!.value);
        }
        this.n++;
        this.Visiblity[this.n]=false;
      }
    }
  }
  deletePasengers(){
    if(this.n<=1){
      return;
    }
    else{
      console.log(this.n)
      this.n--;
      this.Visiblity[this.n-1]=false;
      if(!(this.getFormArray.get(""+(this.n))?.invalid || this.getFormArray.get(""+(this.n))?.errors)){
        this.pasengersList.pop();
      }
      this.getFormArray.removeAt(this.n);
    }
  }
  selected(ind:number){
    if(this.select[ind]==="selectedBox"){
      this.select[ind]="box";
      let removeAbleElementInd=this.seatsSelected.indexOf(ind);
      this.seatsSelected.splice(removeAbleElementInd,1);
    }
    else if(this.pasengersList.length<=this.seatsSelected.length){
      if(this.getFormArray.length>0){
        if(this.getFormArray?.get(""+(this.n-1))!.invalid || this.getFormArray?.get(""+(this.n-1))!.errors || this.pasengersList.indexOf(this.getFormArray?.get(""+(this.n-1))!.value) != -1){
          alert("Enter Pasengers First");
          return;
        }
        else{
          console.log(this.getFormArray?.get(""+(this.n-1))!.value);
          this.pasengersList.push(this.getFormArray?.get(""+(this.n-1))!.value);
          this.select[ind]="selectedBox";
          this.seatsSelected.push(ind);
        }
      }
      else{
        alert("Add Pasengers Data First");
      }
    }
    else{
      if(this.select[ind]==="box"){
        this.select[ind]="selectedBox";
        this.seatsSelected.push(ind);
      }
      else{
        this.select[ind]="box";
        let removeAbleElementInd=this.seatsSelected.indexOf(ind);
        this.seatsSelected.splice(removeAbleElementInd,1);
      }
    }
  }
  check(){
    const c = document.getElementById("c") as HTMLInputElement;
    if(this.seatsSelected.length==0){
      alert("Select any Seat");
      c.checked = false;
    }
    else if(this.pasengersList.length<this.seatsSelected.length){
      alert("Add pasengers data / Deselect the Seats");
      c.checked = false;
    }
    else if(this.pasengersList.length>this.seatsSelected.length){
      alert("Remove pasengers data / Select the Seats");
      c.checked = false;
    }
    else{
      return;
    }
  }
  setSeats(){
    for(let i=0;i<this.seatsSelected.length;i++){
      switch(this.seatsSelected[i]){
        case 1:
          {this.seats.s1 = false;
          break;}
        case 2:
          {this.seats.s2 = false;
          break;}
        case 3:
          {this.seats.s3 = false;
          break;}
        case 4:
         { this.seats.s4 = false;
          break;}
        case 5:
          {this.seats.s5 = false;
          break;}
        case 6:
          {this.seats.s6 = false;
          break;}
        case 7:
          {this.seats.s7 = false;
          break;}
        case 8:
          {this.seats.s8 = false;
          break;}
        case 9:
          {this.seats.s9 = false;
          break;}
        case 10:
          {this.seats.s10 = false;
          break;}
        case 11:
         { this.seats.s11 = false;
          break;}
        case 12:
          {this.seats.s12 = false;
          break;}
        case 13:
          {this.seats.s13 = false;
          break;}
        case 14:
          {this.seats.s14 = false;
          break;}
        case 15:
          {this.seats.s15 = false;
          break;}
        case 16:
          {this.seats.s16 = false;
          break;}
        case 17:
          {this.seats.s17 = false;
          break;}
        case 18:
          {this.seats.s18 = false;
          break;}
        case 19:
          {this.seats.s19 = false;
          break;}
        case 20:
          {this.seats.s20 = false;
          break;}
        case 21:
          {this.seats.s21 = false;
          break;}
        case 22:
          {this.seats.s22 = false;
          break;}
        case 23:
          {this.seats.s23 = false;
          break;}
        case 24:
          {this.seats.s24 = false;
          break;}
        case 25:
          {this.seats.s25 = false;
          break;}
        case 26:
          {this.seats.s26 = false;
          break;}
        case 27:
          {this.seats.s27 = false;
          break;}
        case 28:
          {this.seats.s28 = false;
          break;}
        case 29:
          {this.seats.s29 = false;
          break;}
        case 30:
          {this.seats.s30 = false;
          break;}
      }
    }
    // console.log(this.seats);
    this.service.postBusSeats(this.seats);
  }
  async Proceed(){
    console.log(this.busNumber)
    if(this.ready[0]==true && this.ready[1]=="ready"){
      this.bookng={userName:this.s1.getUserName(),busNumber:this.busNumber}
      await this.service.postUserBookings(this.bookng)
      .subscribe((data)=>{
        this.userBookings=data;
        this.thenPostWithBookingId();
      })
    }
    else{
      alert("check the box and radio Buttons");
    }
  }
  async thenPostWithBookingId(){
    this.setSeats();
    this.bookDet={bookingId:this.userBookings.bookingId,pasengers:this.pasengersList,seatsReserved:this.seatsSelected}
    console.log(this.bookDet);
    await this.service.postBookingDetails(this.bookDet)
    .subscribe(d=>{
      console.log(d);
    });
    this.router.navigate(["/ticket",{bookingId:this.userBookings.bookingId,busNumber:this.busNumber}]);
  }
}
