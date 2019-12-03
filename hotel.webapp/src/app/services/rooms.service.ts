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

  public get rooms$(): Observable<Room[]> {
    this.getRoomsFromAPi();
    return this.apiRooms$.asObservable();
  }

  private readonly apiRooms$: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);

  private getRoomsFromAPi(): void {
    this.hotelApiService.doGetRequest<Room[]>('/rooms').subscribe((data: any) => {
      this.apiRooms$.next(data);
    });
  }

  public createRoom(room: Room): Promise<Room> {
    return this.hotelApiService.doPostRequest<Room>('/rooms', room).toPromise<Room>();
  }

  public getRoom(id: number): Promise<Room> {
    return this.hotelApiService.doGetRequest<Room>('/rooms/' + id).toPromise<Room>();
  }

  public updateRoom(room: Room): Promise<Room> {
    return this.hotelApiService.doPutRequest<Room>('/rooms/' + room.id, room).toPromise<Room>();
  }

  public deleteRoom(id: number): Promise<any> {
    return this.hotelApiService.doDeleteRequest('/rooms/' + id).toPromise();
  }
}
