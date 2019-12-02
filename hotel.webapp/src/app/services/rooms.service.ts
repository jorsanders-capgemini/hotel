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
    this.getRoomsFromAPi();
    return this.apiRooms$.asObservable();
  }

  private getRoomsFromAPi(): void {
    this.hotelApiService.doGetRequest<Room[]>('/rooms').subscribe((data: any) => {
      this.apiRooms$.next(data);
    });
  }

  public createRoom(room: Room): Promise<Room> {
    return this.hotelApiService.doPostRequest<Room>('/rooms', room).toPromise<Room>();
  }

  updateRoom(room: Room): void {
    console.log(room);
  }

  deleteRoom(id: number): Promise<any> {
    return this.hotelApiService.doDeleteRequest('/rooms/' + id).toPromise();
  }
}
