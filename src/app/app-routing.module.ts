import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OptionsComponent } from './options/options.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProfileComponent } from './profile/profile.component';
import { PastBookingsComponent } from './past-bookings/past-bookings.component';
import { AddBussesComponent } from './add-busses/add-busses.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"search",component:SearchComponent},
  {path:"options",component:OptionsComponent},
  {path:"booking",component:BookingComponent},
  {path:"ticket",component:TicketComponent},
  {path:"profile",component:ProfileComponent},
  {path:"pastBookings",component:PastBookingsComponent},
  {path:"addBus",component:AddBussesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
