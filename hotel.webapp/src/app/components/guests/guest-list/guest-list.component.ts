import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest';
import { Observable } from 'rxjs';
import { GuestsService } from 'src/app/services/guests.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {
  public guests$: Observable<Guest[]>;

  constructor(private readonly guestsService: GuestsService) {}

  public ngOnInit() {
    this.guests$ = this.guestsService.guests$;
    this.loadData();
  }

  public loadData() {
    this.guestsService.getGuestsFromAPi();
  }

  public onDelete(id: number) {
    this.guestsService.deleteGuest(id).subscribe(() => {
      this.loadData();
    });
  }
}
