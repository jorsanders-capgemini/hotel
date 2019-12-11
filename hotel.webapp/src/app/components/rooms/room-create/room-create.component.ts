import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';
import { RoomFormData } from '../room-form/room-form.component';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  constructor(protected roomsService: RoomsService, protected router: Router) {}

  ngOnInit() {}

  onSubmit(roomData: RoomFormData) {
    this.roomsService.create({ ...new Room(), ...roomData }).subscribe(() => {
      this.router.navigate(['/rooms']);
    });
  }
}
