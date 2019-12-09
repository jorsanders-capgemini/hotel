import { Validators, FormBuilder } from '@angular/forms';

const formBuilder = new FormBuilder();

export const guestForm = formBuilder.group({
  name: ['', Validators.required],
  email: ['', [Validators.email, Validators.required]]
});
