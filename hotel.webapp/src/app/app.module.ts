import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomCreateComponent } from './components/rooms/room-create/room-create.component';
import { RoomListComponent } from './components/rooms/room-list/room-list.component';
import { RoomEditComponent } from './components/rooms/room-edit/room-edit.component';
import { RoomFormComponent } from './components/rooms/room-form/room-form.component';
import { GuestListComponent } from './components/guests/guest-list/guest-list.component';
import { GuestEditComponent } from './components/guests/guest-edit/guest-edit.component';
import { GuestCreateComponent } from './components/guests/guest-create/guest-create.component';
import { GuestFormComponent } from './components/guests/guest-form/guest-form.component';
import { BookingFormComponent } from './components/bookings/booking-form/booking-form.component';
import { BookingEditComponent } from './components/bookings/booking-edit/booking-edit.component';
import { BookingCreateComponent } from './components/bookings/booking-create/booking-create.component';
import { BookingListComponent } from './components/bookings/booking-list/booking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageNotFoundComponent,
    RoomCreateComponent,
    RoomListComponent,
    RoomEditComponent,
    RoomFormComponent,
    GuestListComponent,
    GuestEditComponent,
    GuestCreateComponent,
    GuestFormComponent,
    BookingFormComponent,
    BookingEditComponent,
    BookingCreateComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
