import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomFormData } from 'src/app/models/fromData/room-form-data';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit, OnChanges {
  @Input()
  public initialData: RoomFormData;
  @Input()
  public buttonText: string;
  @Output() submitEvent: EventEmitter<RoomFormData> = new EventEmitter();
  public form: FormGroup;

  constructor(protected roomsService: RoomsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      capacity: ['', [Validators.min(1), Validators.required]]
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    this.form.patchValue({ ...this.initialData });
  }

  public onSubmit() {
    this.submitEvent.emit(this.form.value);
  }
}
