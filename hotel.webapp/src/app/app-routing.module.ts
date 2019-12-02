import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RoomListComponent } from './components/rooms/room-list/room-list.component';
import { RoomCreateComponent } from './components/rooms/room-create/room-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'kamers', pathMatch: 'full' },
  { path: 'kamers', component: RoomListComponent },
  { path: 'kamers/nieuw', component: RoomCreateComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
