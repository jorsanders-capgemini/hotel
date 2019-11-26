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

  public doGetRequest<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(this.API_URL + endpoint);
  }
}
