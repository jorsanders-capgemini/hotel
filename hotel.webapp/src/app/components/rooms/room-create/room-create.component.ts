import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  roomForm = this.formBuilder.group({
    name: ['', Validators.required],
    capacity: ['', [Validators.min(1), Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private roomsService: RoomsService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const room = new Room().deserialize(this.roomForm.value);
    this.roomsService.createRoom(room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }

  get name() {
    return this.roomForm.get('name');
  }

  get capacity() {
    return this.roomForm.get('capacity');
  }
}
