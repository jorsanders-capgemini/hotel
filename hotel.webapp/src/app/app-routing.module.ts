import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoomListComponent } from './components/rooms/room-list/room-list.component';
import { RoomCreateComponent } from './components/rooms/room-create/room-create.component';
import { RoomEditComponent } from './components/rooms/room-edit/room-edit.component';
import { GuestEditComponent } from './components/guests/guest-edit/guest-edit.component';
import { GuestListComponent } from './components/guests/guest-list/guest-list.component';
import { GuestCreateComponent } from './components/guests/guest-create/guest-create.component';
import { BookingCreateComponent } from './components/bookings/booking-create/booking-create.component';
import { BookingListComponent } from './components/bookings/booking-list/booking-list.component';
import { BookingEditComponent } from './components/bookings/booking-edit/booking-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomListComponent },
  { path: 'rooms/new', component: RoomCreateComponent },
  { path: 'rooms/:id', component: RoomEditComponent },
  { path: 'guests', component: GuestListComponent },
  { path: 'guests/new', component: GuestCreateComponent },
  { path: 'guests/:id', component: GuestEditComponent },
  { path: 'bookings', component: BookingListComponent },
  { path: 'bookings/new', component: BookingCreateComponent },
  { path: 'bookings/:id', component: BookingEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
