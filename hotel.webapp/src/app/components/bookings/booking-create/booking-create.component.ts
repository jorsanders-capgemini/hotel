import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/services/bookings.service';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { BookingFormData } from 'src/app/models/fromData/booking-form-data';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.scss']
})
export class BookingCreateComponent implements OnInit {
  constructor(protected bookingsService: BookingsService, protected router: Router) {}

  ngOnInit() {}

  onSubmit(bookingData: BookingFormData) {
    this.bookingsService.createBooking({ ...new Booking(), ...bookingData }).subscribe(() => {
      this.router.navigate(['/bookings']);
    });
  }
}
