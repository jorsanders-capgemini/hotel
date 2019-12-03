import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {
  private routeSub: Subscription;
  private room: Room;
  roomForm = this.formBuilder.group({
    name: ['', Validators.required],
    capacity: ['', [Validators.min(1), Validators.required]],
    id: ['', [Validators.min(1), Validators.required]]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private roomsService: RoomsService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id.setValue(params.id);
      this.roomsService.getRoom(params.id).subscribe(result => {
        this.room = result;
        this.name.setValue(this.room.name);
        this.capacity.setValue(this.room.capacity);
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

  get name() {
    return this.roomForm.get('name');
  }

  get capacity() {
    return this.roomForm.get('capacity');
  }

  get id() {
    return this.roomForm.get('id');
  }
}
