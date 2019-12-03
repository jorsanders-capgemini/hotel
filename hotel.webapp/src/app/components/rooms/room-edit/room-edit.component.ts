import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { FormGroup } from '@angular/forms';
import { form } from '../form';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit {
  private routeSub: Subscription;
  private form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private roomsService: RoomsService) {
    this.form = form;
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.form.get('id').setValue(params.id);
      console.log(this.form);
      console.log(this.form.get('id').value);
      console.log(this.form.value);
      this.roomsService.getRoom(params.id).subscribe(room => {
        this.form.get('name').setValue(room.name);
        this.form.get('capacity').setValue(room.capacity);
      });
    });

    this.routeSub.unsubscribe();
  }

  onSubmit() {
    const room = new Room().deserialize(form.value);
    this.roomsService.updateRoom(room).subscribe(() => {
      this.router.navigate(['/kamers']);
    });
  }
}
