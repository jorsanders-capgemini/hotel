import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GuestsService } from 'src/app/services/guests.service';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit, OnChanges {
  @Input()
  public initialData: GuestFormData;
  @Input()
  public buttonText: string;
  @Output() submitEvent: EventEmitter<GuestFormData> = new EventEmitter();
  public form: FormGroup;

  constructor(protected guestsService: GuestsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    this.form.patchValue({ ...this.initialData });
  }

  public onSubmit() {
    this.submitEvent.emit(this.form.value);
  }
}

export class GuestFormData {
  public name: string;
  public capacity: number;
}
