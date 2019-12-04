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
  private roomForm: FormGroup;

  constructor(protected roomsService: RoomsService, protected router: Router) {}

  ngOnInit() {
    this.roomForm = roomForm;
    this.roomForm.get('name').setValue('fda');
    this.roomForm.get('capacity').setValue(1);
  }

  onSubmit(value: any) {
    const room = new Room().deserialize(this.roomForm.value);
    this.roomsService.createRoom(room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }
}
