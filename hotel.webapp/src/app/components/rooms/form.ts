import { Validators, FormBuilder } from '@angular/forms';

const formBuilder = new FormBuilder();

export class RoomForm {
  public form = formBuilder.group({
    name: ['', Validators.required],
    capacity: ['', [Validators.min(1), Validators.required]],
    id: ['', [Validators.min(1), Validators.required]]
  });

  public get name() {
    return this.form.get('name');
  }

  public get capacity() {
    return this.form.get('capacity');
  }
}
