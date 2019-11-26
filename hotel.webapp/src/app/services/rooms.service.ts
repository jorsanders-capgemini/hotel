import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Room } from '../models/room';
import { HotelApiService } from './hotel-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  constructor(private hotelApiService: HotelApiService, private readonly httpClient: HttpClient) {}

  private readonly API_URL = 'hotelapi';

  private readonly apiRooms$: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);

  public get rooms$(): Observable<Room[]> {
    // TODO: don't call API every time
    this.getRoomsFromAPi();
    return this.apiRooms$.asObservable();
  }

  private getRoomsFromAPi(): void {
    this.hotelApiService.doGetRequest<Room[]>('/rooms').subscribe((data: any) => {
      this.apiRooms$.next(data);
    });
  }

  addRoom(room: Room): void {
    console.log(room);
  }

  updateRoom(room: Room): void {
    console.log(room);
  }

  deleteRoom(id: number): void {
    console.log(id);
  }
}
