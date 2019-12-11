import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings.service';
import { Booking } from 'src/app/models/booking';
import { BookingFormData } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private bookingsService: BookingsService) {}

  public booking: Booking;

  ngOnInit() {
    this.booking = new Booking();
    const routeSub = this.route.params.subscribe(params => {
      this.bookingsService.getBooking(params.id).subscribe(result => {
        this.booking = result;
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
