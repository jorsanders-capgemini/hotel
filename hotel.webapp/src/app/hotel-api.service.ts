import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from './models/room';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = "api";

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${apiUrl}/rooms`)
      .pipe(
        tap(heroes => console.log('fetched rooms')),
        catchError(this.handleError('getRooms', []))
      );
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${apiUrl}/rooms/${id}`).pipe(
      tap(_ => console.log(`fetched room id=${id}`)),
      catchError(this.handleError<Room>(`getRoom id=${id}`))
    );
  }

  addRoom(room): Observable<Room> {
    return this.http.post<Room>(apiUrl, room, httpOptions).pipe(
      tap((room: Room) => console.log(`added room w/ id=${room.id}`)),
      catchError(this.handleError<Room>('addRoom'))
    );
  }

  updateRoom(id: number, room: Room): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, room, httpOptions).pipe(
      tap(_ => console.log(`updated room id=${id}`)),
      catchError(this.handleError<any>('updateRoom'))
    );
  }

  deleteRoom(id: number): Observable<Room> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Room>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted room id=${id}`)),
      catchError(this.handleError<Room>('deleteRoom'))
    );
  }
}
