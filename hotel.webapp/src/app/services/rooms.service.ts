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

  private readonly apiRooms$: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  public readonly rooms$: Observable<Room[]> = this.apiRooms$.asObservable();

  public getRoomsFromAPi(): void {
    this.hotelApiService.doGetRequest<Room[]>('/rooms').subscribe((data: any) => {
      this.apiRooms$.next(data);
    });
  }

  public createRoom(room: Room): Observable<Room> {
    return this.hotelApiService.doPostRequest<Room>('/rooms', room);
  }

  public getRoom(id: number): Observable<Room> {
    return this.hotelApiService.doGetRequest<Room>('/rooms/' + id);
  }

  public updateRoom(room: Room): Observable<Room> {
    return this.hotelApiService.doPutRequest<Room>('/rooms/' + room.id, room);
  }

  public deleteRoom(id: number): Observable<Room> {
    return this.hotelApiService.doDeleteRequest('/rooms/' + id);
  }
}
