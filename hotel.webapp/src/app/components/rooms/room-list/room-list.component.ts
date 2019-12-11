import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getAllRooms } from 'src/app/store/room/rooms.reducers';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  public rooms$: Observable<Room[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.rooms$ = this.store.select(getAllRooms);
    // this.loadData();
  }

  public loadData() {
    // this.roomsService.getRoomsFromAPi();
  }

  public onDelete(id: number) {
    // this.roomsService.deleteById(id).subscribe(() => {
    //   this.loadData();
    // });
  }
}
