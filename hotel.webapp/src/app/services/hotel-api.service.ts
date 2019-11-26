import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
  private readonly API_URL = 'hotelapi';

  constructor(private httpClient: HttpClient) {}

  public getAllRooms(): Room[] {
    let rooms: Room[] = [];

    this.httpClient.get<Room[]>(this.API_URL + '/rooms').subscribe((data: Room[]) => {
      rooms = data;
    });

    console.log(rooms);

    return rooms;
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
