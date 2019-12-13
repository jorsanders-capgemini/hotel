import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    // TODO: set authentication headers
  }

  private readonly API_URL = 'http://localhost:8082/api';

  public doPutRequest<T>(endpoint: string, body: any) {
    return this.httpClient.put<T>(this.API_URL + endpoint, body, { headers: this.headers });
  }

  public doDeleteRequest<T>(endpoint: string) {
    return this.httpClient.delete<T>(this.API_URL + endpoint, { headers: this.headers });
  }

  public doPostRequest<T>(endpoint: string, body: any) {
    return this.httpClient.post<T>(this.API_URL + endpoint, body, { headers: this.headers });
  }

  public doGetRequest<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(this.API_URL + endpoint, { headers: this.headers });
  }
}
