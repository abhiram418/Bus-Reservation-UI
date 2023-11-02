import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pasengers } from '../booking/pasengers';
import { Busses } from '../options/BusData';
import { BookingDetails } from './BookingDetailsType';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  pasengersList:any[]=[];
  busData:Busses={};
  ticket:BookingDetails={};
  ticketNo!:number;
  busNo!:number;

  constructor(private route:ActivatedRoute,private router:Router,private service:ServerService){
    this.ticketNo= parseInt(this.route.snapshot.paramMap.get('bookingId')!);
    this.busNo= parseInt(this.route.snapshot.paramMap.get('busNumber')!);
  }
  async ngOnInit(){
    
    await this.service.getBookingDetails(this.ticketNo)
    .subscribe((data)=>{
      this.ticket=data;
      this.pasengersList=this.ticket.pasengers!;
      console.log(this.pasengersList)
    })
    await this.service.getBusData(this.busNo)
    .subscribe((data)=>{
      this.busData=data;
    })
  }

  back(){
    this.router.navigate(["search"]);
  }
}
