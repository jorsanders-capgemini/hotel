import { Action } from '@ngrx/store';
import { Room } from 'src/app/models/room';

export const GET_ROOMS = '[ALL] Rooms';
export const GET_ROOMS_SUCCESS = '[ALL] Rooms Success';
export const GET_ROOMS_ERROR = '[ALL] Rooms Error';

export const GET_ROOM = '[GET] Room';
export const GET_ROOM_SUCCESS = '[GET] Rooms Success';
export const GET_ROOM_ERROR = '[GET] Rooms Error';

export const CREATE_ROOM = '[CREATE] Room';
export const CREATE_ROOM_SUCCESS = '[CREATE] Room Success';
export const CREATE_ROOM_ERROR = '[CREATE] Room Error';

export const DELETE_ROOM = '[DELETE] Room';
export const DELETE_ROOM_SUCCESS = '[DELETE] Room Success';
export const DELETE_ROOM_ERROR = '[DELETE] Room Error';

export const UPDATE_ROOM = '[UPDATE] Room';
export const UPDATE_ROOM_SUCCESS = '[UPDATE] Room Success';
export const UPDATE_ROOM_ERROR = '[UPDATE] Room Error';

/****************************************
 * GET all the rooms
 ****************************************/
export class GetAllRooms implements Action {
  readonly type = GET_ROOMS;
}

export class GetAllRoomsSuccess implements Action {
  readonly type = GET_ROOMS_SUCCESS;

  constructor(public payload: Room[]) {}
}

export class GetAllRoomsError implements Action {
  readonly type = GET_ROOMS_ERROR;

  constructor(public payload: Error) {}
}

/****************************************
 * GET room by id
 ****************************************/
export class GetRoom implements Action {
  readonly type = GET_ROOM;

  constructor(public payload: number) {}
}

export class GetRoomSuccess implements Action {
  readonly type = GET_ROOM_SUCCESS;

  constructor(public payload: Room) {}
}

export class GetRoomError implements Action {
  readonly type = GET_ROOM_ERROR;

  constructor(public payload: Error) {}
}

/****************************************
 * ADD new room
 ****************************************/
export class AddRoom implements Action {
  readonly type = CREATE_ROOM;

  constructor(public payload: Room) {}
}

export class AddRoomSuccess implements Action {
  readonly type = CREATE_ROOM_SUCCESS;

  constructor(public payload: number) {}
}

export class AddRoomError implements Action {
  readonly type = CREATE_ROOM_ERROR;

  constructor(public payload: Error) {}
}

/****************************************
 * REMOVE a room by id
 ****************************************/
export class RemoveRoom implements Action {
  readonly type = DELETE_ROOM;

  constructor(public payload: number) {}
}

export class RemoveRoomSuccess implements Action {
  readonly type = DELETE_ROOM_SUCCESS;

  constructor(public payload: Room) {}
}

export class RemoveRoomError implements Action {
  readonly type = DELETE_ROOM_ERROR;

  constructor(public payload: Error) {}
}

/****************************************
 * UPDATE room by id
 ****************************************/
export class UpdateRoom implements Action {
  readonly type = UPDATE_ROOM;

  constructor(public payload: Room) {}
}

export class UpdateRoomSuccess implements Action {
  readonly type = UPDATE_ROOM_SUCCESS;
}

export class UpdateRoomError implements Action {
  readonly type = UPDATE_ROOM_ERROR;

  constructor(public payload: Error) {}
}
