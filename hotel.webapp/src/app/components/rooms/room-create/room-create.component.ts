import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { Router } from '@angular/router';
import { FormComponentComponent } from '../form-component/form-component.component';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent extends FormComponentComponent {
  constructor(protected roomsService: RoomsService, protected router: Router) {
    super(roomsService);
  }

  protected buttonText = 'Voeg toe';

  onSubmit() {
    const room = new Room().deserialize(this.roomForm.value);
    this.roomsService.createRoom(room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }
}
