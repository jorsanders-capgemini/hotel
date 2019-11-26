import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { Observable } from 'rxjs';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-root',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  public readonly displayedColumns = ['id', 'name', 'capacity'];

  public rooms$: Observable<Room[]>;

  constructor(private readonly roomsService: RoomsService) {}

  public ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.rooms$ = this.roomsService.rooms$;
  }
}
