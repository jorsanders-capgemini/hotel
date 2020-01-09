import { Injectable } from '@angular/core';
import { HotelApiService } from './hotel-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  constructor(private hotelApiService: HotelApiService) {}

  private readonly apiBookings$: BehaviorSubject<Booking[]> = new BehaviorSubject<Booking[]>([]);
  public readonly bookings$: Observable<Booking[]> = this.apiBookings$.asObservable();

  public getBookingsFromAPi(): void {
    this.hotelApiService.doGetRequest<Booking[]>('/bookings').subscribe((data: any) => {
      this.apiBookings$.next(data);
    });
  }

  public createBooking(booking: Booking): Observable<Booking> {
    return this.hotelApiService.doPostRequest<Booking>('/bookings', booking);
  }

  public getBooking(id: number): Observable<Booking> {
    return this.hotelApiService.doGetRequest<Booking>('/bookings/' + id);
  }

  public updateBooking(booking: Booking): Observable<Booking> {
    return this.hotelApiService.doPutRequest<Booking>('/bookings/' + booking.id, booking);
  }

  public deleteBooking(id: number): Observable<Booking> {
    return this.hotelApiService.doDeleteRequest('/bookings/' + id);
  }
}
