import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RoomAddComponent } from './components/room-add/room-add.component';
import { RoomsComponent } from './components/rooms/rooms.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'room/add', component: RoomAddComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
