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
    this.rooms$ = this.roomsService.rooms$;
    this.loadData();
  }

  public loadData() {
    this.roomsService.getRoomsFromAPi();
  }

  public onDelete(id: number) {
    this.roomsService.deleteRoom(id).subscribe(() => {
      this.loadData();
    });
  }
}
