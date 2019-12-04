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
  @Input()
  public onSubmit: any;

  constructor(protected roomsService: RoomsService) {}

  ngOnInit() {
    this.form = roomForm;
    this.onSubmit = () => {
      console.log('dsaf');
    };
  }

  public get name() {
    return this.form.get('name');
  }

  public get capacity() {
    return this.form.get('capacity');
  }
}
