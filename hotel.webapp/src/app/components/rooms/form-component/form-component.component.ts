import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { form } from '../form';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  protected roomForm: FormGroup;
  protected buttonText: string;

  constructor(protected roomsService: RoomsService) {}

  ngOnInit() {
    this.roomForm = form;
  }

  public get name() {
    return this.roomForm.get('name');
  }

  public get capacity() {
    return this.roomForm.get('capacity');
  }

  public onSubmit() {
    throw new Error('Not implemented');
  }
}
