import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit, OnChanges {
  @Input()
  public initialData: BookingFormData;
  @Input()
  public buttonText: string;
  @Output() submitEvent: EventEmitter<BookingFormData> = new EventEmitter();
  public form: FormGroup;

  constructor(protected bookingsService: BookingsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      roomIds: this.formBuilder.array([]),
      guestIds: [[], []],
      bookingDate: ['', [Validators.required]],
      nights: [0, [Validators.min(1), Validators.required]]
    });
  }

  addRoomId() {
    (this.form.controls.roomIds as FormArray).push(this.formBuilder.control(0));
  }

  ngOnInit() {}

  ngOnChanges() {
    this.form.patchValue({ ...this.initialData });
  }

  public onSubmit() {
    console.log('onSubmit');
    this.submitEvent.emit(this.form.value);
  }
}

export class BookingFormData {
  public name: string;
  public roomIds: number[];
  public guestIds: number[];
  public bookingDate: Date;
}
