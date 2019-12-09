import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuestsService } from 'src/app/services/guests.service';
import { Guest } from 'src/app/models/guest';
import { guestForm } from '../guestForm';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.scss']
})
export class GuestEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private guestsService: GuestsService) {}

  private guest: Guest;

  ngOnInit() {
    this.guest = new Guest();
    const routeSub = this.route.params.subscribe(params => {
      this.guestsService.getGuest(params.id).subscribe(result => {
        this.guest = result;
        guestForm.get('name').setValue(this.guest.name);
        guestForm.get('email').setValue(this.guest.email);
      });
    });

    routeSub.unsubscribe();
  }
  onSubmit(guestData: any) {
    this.guest.name = guestData.name;
    this.guest.email = guestData.email;
    this.guestsService.updateGuest(this.guest).subscribe(() => {
      this.router.navigate(['/guests']);
    });
  }
}
