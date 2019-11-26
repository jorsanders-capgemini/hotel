import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Room } from '../models/room';
import { HotelApiService } from './hotel-api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  constructor(private hotelApiService: HotelApiService) {}

  private readonly apiRooms$: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);

  public get rooms$(): Observable<Room[]> {
    this.apiRooms$.next(this.hotelApiService.getAllRooms());
    return this.apiRooms$.asObservable();
  }
}
