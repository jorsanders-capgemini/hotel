import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GuestsService } from 'src/app/services/guests.service';
import { guestForm } from '../guestForm';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {
  public form: FormGroup;
  @Input()
  public buttonText: string;
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  constructor(protected guestsService: GuestsService) {}

  ngOnInit() {
    console.log(this.form);
    console.log(this.buttonText);

    this.form = guestForm;
    this.form.reset();
  }

  public get name() {
    return this.form.get('name');
  }

  public get email() {
    return this.form.get('email');
  }

  public onSubmit() {
    this.submitEvent.emit(this.form.value);
  }
}
