import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoomListComponent } from './components/rooms/room-list/room-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: 'rooms', component: RoomListComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
