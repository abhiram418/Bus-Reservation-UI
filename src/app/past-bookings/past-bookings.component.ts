import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserBookings } from './UserBookings';
import { ServerService } from '../server.service';
import { ServiceService } from '../service.service';
import { Busses } from '../options/BusData';
import { tap } from 'rxjs';


@Component({
  selector: 'app-past-bookings',
  templateUrl: './past-bookings.component.html',
  styleUrls: ['./past-bookings.component.css']
})
export class PastBookingsComponent {
  bussesData:Busses[]=[];
  userBookings:UserBookings[]=[];
  constructor(private router:Router,private server:ServerService,private s1:ServiceService){
    this.userbookingData();
  }
  async userbookingData(){
    await this.server.getUserBookings(this.s1.getUserName())
    .pipe<UserBookings[]>(tap((d:any)=>console.log(d)))
    .subscribe((data)=>{
      this.userBookings=data;
      this.bookingsData();
    });
  }
  async bookingsData(){
    for (let index = 0; index < this.userBookings.length; index++) {
      await this.server.getBusData(this.userBookings[index].busNumber!)
      .subscribe((data)=>{
        this.bussesData.push(data);
      });
    }
  }
  redirect(n:number){
    this.router.navigate(["ticket",{bookingId:this.userBookings[n]?.bookingId,busNumber:this.userBookings[n]?.busNumber}]);
  }
}
