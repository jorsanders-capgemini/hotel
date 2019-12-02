import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
  constructor(private httpClient: HttpClient) {}

  private readonly API_URL = 'hotelapi';
  doDeleteRequest<T>(endpoint: string) {
    return this.httpClient.delete<T>(this.API_URL + endpoint);
  }

  doPostRequest<T>(endpoint: string, body: any) {
    return this.httpClient.post<T>(this.API_URL + endpoint, body);
  }

  public doGetRequest<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(this.API_URL + endpoint);
  }
}
