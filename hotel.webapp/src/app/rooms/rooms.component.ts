import { Component, OnInit } from '@angular/core';
import { HotelApiService } from '../hotel-api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  private rooms = []
  private isLoadingResults = true;

  constructor(private hotelApiAService: HotelApiService) { }

  ngOnInit() {
    this.hotelApiAService.getRooms()
      .subscribe(res => {
        this.rooms = res;
        console.log(this.rooms);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
