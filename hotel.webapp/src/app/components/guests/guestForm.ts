import { Validators, FormBuilder } from '@angular/forms';

const formBuilder = new FormBuilder();

export const roomForm = formBuilder.group({
  name: ['', Validators.required],
  email: ['', [Validators.email]]
});
