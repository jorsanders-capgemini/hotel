import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
 
  private API_SERVER = "http://localhost:8082";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint: string){
    return this.httpClient.get(this.API_SERVER + '/api/' + endpoint);
  }
}
