import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RoomsService } from 'src/app/services/rooms.service';
import { roomForm } from '../roomForm';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  public form: FormGroup;
  @Input()
  public buttonText: string;
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  constructor(protected roomsService: RoomsService) {}

  ngOnInit() {
    this.form = roomForm;
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
