import { Component, OnInit } from '@angular/core';
import { GuestsService } from 'src/app/services/guests.service';
import { Router } from '@angular/router';
import { Guest } from 'src/app/models/guest';
import { GuestFormData } from '../guest-form/guest-form.component';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.scss']
})
export class GuestCreateComponent implements OnInit {
  constructor(protected guestsService: GuestsService, protected router: Router) {}

  ngOnInit() {}

  onSubmit(guestData: GuestFormData) {
    this.guestsService.createGuest({ ...new Guest(), ...guestData }).subscribe(() => {
      this.router.navigate(['/guests']);
    });
  }
}
