import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RoomForm } from '../form';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {
  private routeSub: Subscription;
  private roomForm: any;

  constructor(private router: Router, private route: ActivatedRoute, private roomsService: RoomsService) {
    this.roomForm = RoomForm;
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.roomForm.id.setValue(params.id);
      this.roomsService.getRoom(params.id).subscribe(room => {
        this.roomForm.name.setValue(room.name);
        this.roomForm.capacity.setValue(room.capacity);
      });
    });

    this.routeSub.unsubscribe();
  }

  onSubmit() {
    const room = new Room().deserialize(this.roomForm.value);
    this.roomsService.updateRoom(room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }
}
