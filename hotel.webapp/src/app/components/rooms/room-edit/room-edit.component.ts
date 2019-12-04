import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {
  constructor(protected roomsService: RoomsService, protected router: Router) {}

  ngOnInit() {}
  onSubmit(roomData: any) {
    const room = new Room().deserialize(roomData);
    this.roomsService.createRoom(room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }
}
