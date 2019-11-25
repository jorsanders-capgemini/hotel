import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
  private readonly API_URL = 'hotelapi';

  private readonly dataChange$: BehaviorSubject<Room[]> = new BehaviorSubject<
    Room[]
  >([]);

  public get rooms$(): Observable<Room[]> {
    return this.dataChange$.asObservable();
  }
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): Room[] {
    return this.dataChange$.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Room[]>(this.API_URL + '/rooms').subscribe(
      data => {
        console.log(data);
        this.dataChange$.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  // DEMO ONLY, you can find working methods below
  addIssue(issue: Room): void {
    this.dialogData = issue;
  }

  updateIssue(issue: Room): void {
    this.dialogData = issue;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }
}
