import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Observable } from 'rxjs';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  public bookings$: Observable<Booking[]>;

  constructor(private readonly bookingsService: BookingsService) {}

  public ngOnInit() {
    this.bookings$ = this.bookingsService.bookings$;
    this.loadData();
  }

  public loadData() {
    this.bookingsService.getBookingsFromAPi();
  }

  public onDelete(id: number) {
    this.bookingsService.deleteBooking(id).subscribe(() => {
      this.loadData();
    });
  }
}
