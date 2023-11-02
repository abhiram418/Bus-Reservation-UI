import { Component } from '@angular/core';
import { SearchData } from '../search/searchData';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { tap } from 'rxjs';
import { ServiceService } from '../service.service';
import { Busses } from './BusData';



@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  userSearchData:SearchData;
  bussesData!:Busses[];
  infoView:boolean[]=[];

  constructor(private service:ServerService,private s1:ServiceService,private router:Router){
    this.userSearchData=s1.getUserSearchData();
    this.service.getAllBusses()
    .pipe<Busses[]>(tap((d:any)=>console.log(d)))
    .subscribe((data)=>{
      this.bussesData=data;
      this.view();
    })
  }


  view(){
    for (let index = 0; index < this.bussesData.length; index++) {
      this.infoView[index]=false;
    }
  }
  showInfo(i:number){
    this.infoView[i]=!(this.infoView[i]);
  }
  continue(i:number){
    this.router.navigate(["booking",{bus:this.bussesData[i].busNumber}]);
  }
}
