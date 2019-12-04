import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';
import { form } from '../form';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  private roomForm: FormGroup;

  constructor(protected roomsService: RoomsService, protected router: Router) {}

  ngOnInit() {
    this.roomForm = form;
    this.roomForm.get('name').setValue('fda');
  }

  onSubmit() {
    const room = new Room().deserialize(this.roomForm.value);
    this.roomsService.createRoom(room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }
}
