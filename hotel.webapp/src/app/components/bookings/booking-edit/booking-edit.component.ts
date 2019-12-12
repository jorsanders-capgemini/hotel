import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings.service';
import { Booking } from 'src/app/models/booking';
import { BookingFormData } from 'src/app/models/fromData/booking-form-data';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private bookingsService: BookingsService) {}

  public booking: Booking;
  public bookingFormData: BookingFormData;

  ngOnInit() {
    this.booking = new Booking();
    const routeSub = this.route.params.subscribe(params => {
      this.bookingsService.getBooking(params.id).subscribe(result => {
        this.booking = result;
        this.bookingFormData = {
          nights: result.nights,
          bookingDate: new Date(result.bookingDate),
          guestIds: result.guests.map(guest => guest.id),
          roomIds: result.rooms.map(room => room.id)
        };
      });
    });
    routeSub.unsubscribe();
  }

  onSubmit(bookingData: BookingFormData) {
    this.bookingsService.updateBooking({ ...this.booking, ...bookingData }).subscribe(() => {
      this.router.navigate(['/bookings']);
    });
  }
}
