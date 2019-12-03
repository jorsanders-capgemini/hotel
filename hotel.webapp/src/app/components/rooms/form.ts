import { Validators, FormBuilder } from '@angular/forms';

const formBuilder = new FormBuilder();

export const form = formBuilder.group({
  name: ['', Validators.required],
  capacity: ['', [Validators.min(1), Validators.required]],
  id: ['', [Validators.min(1), Validators.required]]
});
