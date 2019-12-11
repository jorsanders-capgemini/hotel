import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as roomActions from './rooms.actions';
import {
  AddRoom,
  AddRoomError,
  AddRoomSuccess,
  GetAllRoomsError,
  GetAllRoomsSuccess,
  GetRoom,
  GetRoomError,
  GetRoomSuccess,
  RemoveRoom,
  RemoveRoomError,
  RemoveRoomSuccess,
  UpdateRoom,
  UpdateRoomError,
  UpdateRoomSuccess
} from './rooms.actions';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RoomsService } from 'src/app/services/rooms.service';
import { Room } from 'src/app/models/room';

@Injectable()
export class RoomEffects {
  constructor(private actions$: Actions, private svc: RoomsService) {}

  @Effect()
  getAllRooms$: Observable<Action> = this.actions$.pipe(
    ofType(roomActions.GET_ROOMS),
    switchMap(() => this.svc.getAll()),
    map(rooms => new GetAllRoomsSuccess(rooms)),
    catchError(err => [new GetAllRoomsError(err)])
  );

  @Effect()
  getRoom$ = this.actions$.pipe(
    ofType(roomActions.GET_ROOM),
    map((action: GetRoom) => action.payload),
    switchMap(id => this.svc.getById(id)),
    map(room => new GetRoomSuccess(room)),
    catchError(err => [new GetRoomError(err)])
  );

  @Effect()
  updateRoom$ = this.actions$.pipe(
    ofType(roomActions.UPDATE_ROOM),
    map((action: UpdateRoom) => action.payload),
    switchMap(room => this.svc.update(room)),
    map(() => new UpdateRoomSuccess()),
    catchError(err => [new UpdateRoomError(err)])
  );

  @Effect()
  createRoom$ = this.actions$.pipe(
    ofType(roomActions.CREATE_ROOM),
    map((action: AddRoom) => action.payload),
    switchMap(newRoom => this.svc.create(newRoom)),
    map(response => new AddRoomSuccess(response.id)),
    catchError(err => [new AddRoomError(err)])
  );

  @Effect()
  removeRoom$ = this.actions$.pipe(
    ofType(roomActions.DELETE_ROOM),
    map((action: RemoveRoom) => action.payload),
    switchMap(id => this.svc.deleteById(id)),
    map((room: Room) => new RemoveRoomSuccess(room)),
    catchError(err => [new RemoveRoomError(err)])
  );
}
