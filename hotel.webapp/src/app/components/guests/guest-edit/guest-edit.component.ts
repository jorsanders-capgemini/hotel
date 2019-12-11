import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuestsService } from 'src/app/services/guests.service';
import { Guest } from 'src/app/models/guest';
import { GuestFormData } from '../guest-form/guest-form.component';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.scss']
})
export class GuestEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private guestsService: GuestsService) {}

  public guest: Guest;

  ngOnInit() {
    this.guest = new Guest();
    const routeSub = this.route.params.subscribe(params => {
      this.guestsService.getGuest(params.id).subscribe(result => {
        this.guest = result;
      });
    });
    routeSub.unsubscribe();
  }

  onSubmit(guestData: GuestFormData) {
    this.guestsService.updateGuest({ ...this.guest, ...guestData }).subscribe(() => {
      this.router.navigate(['/guests']);
    });
  }
}
