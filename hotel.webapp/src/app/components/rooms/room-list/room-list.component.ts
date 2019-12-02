import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  public rooms$: Observable<Room[]>;

  constructor(private readonly roomsService: RoomsService) {}

  public ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.rooms$ = this.roomsService.rooms$;
  }

  public onDelete(id: number) {
    this.roomsService.deleteRoom(id).then(() => {
      this.loadData();
    });
  }
}
