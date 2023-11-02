import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OptionsComponent } from './options/options.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProfileComponent } from './profile/profile.component';
import { PastBookingsComponent } from './past-bookings/past-bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBussesComponent } from './add-busses/add-busses.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SignUpComponent,
    OptionsComponent,
    BookingComponent,
    TicketComponent,
    ProfileComponent,
    PastBookingsComponent,
    AddBussesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
