import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent {
  roomForm = this.formBuilder.group({
    name: ['', Validators.required],
    capacity: ['', [Validators.min(1), Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.roomForm.value);
  }

  get name() {
    return this.roomForm.get('name');
  }

  get capacity() {
    return this.roomForm.get('capacity');
  }
}
