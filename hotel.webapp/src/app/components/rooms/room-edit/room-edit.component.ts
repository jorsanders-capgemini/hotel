import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room';
import { roomForm } from '../roomForm';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private roomsService: RoomsService) {}

  private room: Room;

  ngOnInit() {
    this.room = new Room();

    this.routeSub = this.route.params.subscribe(params => {
      this.roomsService.getRoom(params.id).subscribe(result => {
        this.room = result;
        roomForm.get('name').setValue(this.room.name);
        roomForm.get('capacity').setValue(this.room.capacity);
      });
    });
  }
  onSubmit(roomData: any) {
    this.room.name = roomData.name;
    this.room.capacity = roomData.capacity;
    this.roomsService.updateRoom(this.room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }
}
