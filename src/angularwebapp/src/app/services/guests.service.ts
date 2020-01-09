import { Injectable } from '@angular/core';
import { HotelApiService } from './hotel-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  constructor(private hotelApiService: HotelApiService) {}

  private readonly apiGuests$: BehaviorSubject<Guest[]> = new BehaviorSubject<Guest[]>([]);
  public readonly guests$: Observable<Guest[]> = this.apiGuests$.asObservable();

  public getGuestsFromAPi(): void {
    this.hotelApiService.doGetRequest<Guest[]>('/guests').subscribe((data: any) => {
      this.apiGuests$.next(data);
    });
  }

  public createGuest(guest: Guest): Observable<Guest> {
    return this.hotelApiService.doPostRequest<Guest>('/guests', guest);
  }

  public getGuest(id: number): Observable<Guest> {
    return this.hotelApiService.doGetRequest<Guest>('/guests/' + id);
  }

  public updateGuest(guest: Guest): Observable<Guest> {
    return this.hotelApiService.doPutRequest<Guest>('/guests/' + guest.id, guest);
  }

  public deleteGuest(id: number): Observable<Guest> {
    return this.hotelApiService.doDeleteRequest('/guests/' + id);
  }
}
