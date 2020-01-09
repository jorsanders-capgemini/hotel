import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { BookingsService } from 'src/app/services/bookings.service';
import { BookingFormData } from 'src/app/models/fromData/booking-form-data';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @Input()
  public initialData: BookingFormData;
  @Input()
  public buttonText: string;
  @Output() submitEvent: EventEmitter<BookingFormData> = new EventEmitter();
  public form: FormGroup;

  constructor(protected bookingsService: BookingsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      roomIds: this.formBuilder.array([]),
      guestIds: this.formBuilder.array([]),
      bookingDate: ['', [Validators.required]],
      nights: [0, [Validators.min(1), Validators.required]]
    });
  }

  addRoomId() {
    (this.form.controls.roomIds as FormArray).push(this.formBuilder.control(0));
  }

  addGuestId() {
    (this.form.controls.guestIds as FormArray).push(this.formBuilder.control(0));
  }

  ngOnInit() {
    if (!this.initialData) {
      return;
    }

    this.initialData.guestIds.forEach(guestId => {
      (this.form.controls.guestIds as FormArray).push(this.formBuilder.control(guestId));
    });
    this.initialData.roomIds.forEach(roomId => {
      (this.form.controls.roomIds as FormArray).push(this.formBuilder.control(roomId));
    });
    this.form.patchValue({ nights: this.initialData.nights, bookingDate: this.initialData.bookingDate.toISOString().substring(0, 16) });
  }

  public onSubmit() {
    this.submitEvent.emit(this.form.value);
  }

  get formData() {
    return this.form.get('Data') as FormArray;
  }

  get formControls() {
    return this.form.controls as any;
  }
}
