import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './ProfileType';
import { ServerService } from '../server.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profilePictureUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9m8jRvKguYBjFGoAcRCG5PsBDMhPFcmG3A&usqp=CAU';
  show:boolean=false;
  profile:Profile={}
  show1:Boolean=false;
  admin:boolean=false;

  constructor(private router:Router,private server:ServerService,private s1:ServiceService){
    this.server.getProfile(this.s1.getUserName())
      .subscribe((data)=>{
        this.profile=data;
      })
  }
  ngOnInit(){
    this.admin=(this.s1.getUserName() === "admin");
  }

  changePic(){
    this.show=!this.show;
  }
  choosePic(n:number){
    switch(n){
      case(1):{
        this.profilePictureUrl="https://m.economictimes.com/thumb/height-450,width-600,imgsize-16886,msid-102703009/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg";
        break;
      }
      case(2):{
        this.profilePictureUrl="https://images5.alphacoders.com/116/1169179.png";
        break;
      }
      case(3):{
        this.profilePictureUrl="https://mir-s3-cdn-cf.behance.net/projects/404/9e1592125187477.Y3JvcCwyNDgxLDE5NDAsMCw3ODY.jpg";
      }
    }
  }
  Bookings(to:number){
    if(to==1){
      this.show1=!this.show1;
    }
    else if(to==2){
      this.router.navigate(["pastBookings"]);
    }
    else if(to==3){
      this.router.navigate(["addBus"]);
    }
    else{
      window.location.reload();
      this.router.navigate(["login"]);
    }
  }
}
