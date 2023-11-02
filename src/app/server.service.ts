import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seats } from './booking/Seats';
import { Busses } from './options/BusData';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }



  getLogin(userName:String,password:String){
    return this.http.get("http://localhost:8080/user/login/"+userName+"?key="+password)
  }
  checkSingup(userName:String){
    return this.http.get("http://localhost:8080/user/signup/"+userName)
  }
  addlogin(data:object){
    return this.http.post("http://localhost:8080/user/signup",data).subscribe((data)=>{console.log(data)})
  }
  addProfile(data:object){
    return this.http.post("http://localhost:8080/profile/",data).subscribe((data)=>{console.log(data)})
  }
  getProfile(userName:String){
    return this.http.get("http://localhost:8080/profile/"+userName)
  }
  getAllBusses(){
    return this.http.get("http://localhost:8080/bus/")
  }
  getBusData(busNo:number){
    return this.http.get("http://localhost:8080/bus/"+busNo)
  }
  postBusData(bus:Busses){
    return this.http.post("http://localhost:8080/bus/",bus).subscribe(d=>{console.log(d)})
  }
  getUserBookings(userName:String){
    return this.http.get("http://localhost:8080/userbookings/"+userName)
  }
  postUserBookings(data:Object){
    return this.http.post("http://localhost:8080/userbookings/",data)
  }
  getBookingDetails(bookingId:number){
    return this.http.get("http://localhost:8080/bookingDetails/"+bookingId)
  }
  postBookingDetails(data:Object){
    return this.http.post("http://localhost:8080/bookingDetails/",data)
  }
  getSeats(busName:number){
    return this.http.get("http://localhost:8080/seats/"+busName)
  }
  postBusSeats(data:any){
    return this.http.post("http://localhost:8080/seats/",data).subscribe(d=>{console.log(d)})
  }
  
}
