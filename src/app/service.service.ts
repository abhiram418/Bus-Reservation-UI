import { Injectable } from '@angular/core';
import { SearchData } from './search/searchData';
import { pasengers } from './booking/pasengers';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private userName:String="admin";
  userSearchData:SearchData={fromPlace:"1",toPlace:"2"};
  pasengersList:pasengers[]=[];
  constructor(private service:ServerService) { }
  

  getUserName():String{
    return(this.userName);
  }
  setUserName(userName:String){
    this.userName=userName;
  }
  setSearchData(data:SearchData){
    this.userSearchData=data;
  }
  getUserSearchData():SearchData{
    return(this.userSearchData);
  }
  setPasengersData(list:pasengers[]){
    this.pasengersList=list;
  }
  getPasengersData(){
    return this.pasengersList;
  }
}
