import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RoomsService } from 'src/app/services/rooms.service';
import { roomForm } from '../roomForm';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {
  public form: FormGroup;
  @Input()
  public buttonText: string;
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  constructor(protected roomsService: RoomsService) {}

  ngOnInit() {
    this.form = roomForm;
    this.form.reset();
  }

  public get name() {
    return this.form.get('name');
  }

  public get capacity() {
    return this.form.get('capacity');
  }

  public onSubmit() {
    this.submitEvent.emit(this.form.value);
  }
}
