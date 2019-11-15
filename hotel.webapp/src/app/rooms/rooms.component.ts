import { Component, OnInit } from '@angular/core';
import { HotelApiService } from '../hotel-api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  private rooms = []

  constructor(private hotelApiAService: HotelApiService){}

  ngOnInit() {
    this.hotelApiAService.sendGetRequest('rooms').subscribe((data: any[])=>{
      this.rooms = data;
    })
  }

}
