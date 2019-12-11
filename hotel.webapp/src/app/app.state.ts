import * as fromRooms from './store/room/rooms.reducers';

export interface AppState {
  rooms: fromRooms.State;
}
