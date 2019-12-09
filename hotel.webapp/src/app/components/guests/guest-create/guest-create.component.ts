import { Component, OnInit } from '@angular/core';
import { GuestsService } from 'src/app/services/guests.service';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.scss']
})
export class GuestCreateComponent implements OnInit {
  constructor(protected guestsService: GuestsService, protected router: Router) {}

  ngOnInit() {}

  onSubmit(guestData: any) {
    let guest: Guest;
    guest = guestData;
    this.guestsService.createGuest(guest).subscribe(() => {
      this.router.navigate(['/guests']);
    });
  }
}
