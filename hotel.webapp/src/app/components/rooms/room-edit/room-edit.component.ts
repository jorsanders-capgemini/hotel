import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomFormData } from '../room-form/room-form.component';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private roomsService: RoomsService) {}

  public room: Room;

  ngOnInit() {
    this.room = new Room();
    const routeSub = this.route.params.subscribe(params => {
      this.roomsService.getRoom(params.id).subscribe(result => {
        this.room = result;
      });
    });
    routeSub.unsubscribe();
  }

  onSubmit(roomData: RoomFormData) {
    this.roomsService.updateRoom({ ...this.room, ...roomData }).subscribe(() => {
      this.router.navigate(['/rooms']);
    });
  }
}
