import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';
import { roomForm } from '../roomForm';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  constructor(protected roomsService: RoomsService, protected router: Router) {}

  ngOnInit() {}

  onSubmit(roomData: any) {
    let room: Room;
    room = roomData;
    this.roomsService.createRoom(room).subscribe(() => {
      this.router.navigate(['/rooms']);
    });
  }
}
