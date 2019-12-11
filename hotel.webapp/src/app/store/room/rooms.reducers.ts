import * as roomActions from './rooms.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Room } from 'src/app/models/room';
import { AppAction } from 'src/app/app.action';

export interface State {
  data: Room[];
  selected: Room;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  switch (action.type) {
    /*************************
     * GET all rooms actions
     ************************/
    case roomActions.GET_ROOMS:
      return {
        ...state,
        action: roomActions.GET_ROOMS,
        done: false,
        selected: null,
        error: null
      };
    case roomActions.GET_ROOMS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case roomActions.GET_ROOMS_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

    /*************************
     * GET room by id actions
     ************************/
    case roomActions.GET_ROOM:
      return {
        ...state,
        action: roomActions.GET_ROOM,
        done: false,
        selected: null,
        error: null
      };
    case roomActions.GET_ROOM_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        done: true,
        error: null
      };
    case roomActions.GET_ROOM_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };

    /*************************
     * CREATE room actions
     ************************/
    case roomActions.CREATE_ROOM:
      return {
        ...state,
        selected: action.payload,
        action: roomActions.CREATE_ROOM,
        done: false,
        error: null
      };
    case roomActions.CREATE_ROOM_SUCCESS: {
      const newRoom = {
        ...state.selected,
        id: action.payload
      };
      const data = [...state.data, newRoom];
      return {
        ...state,
        data,
        selected: null,
        error: null,
        done: true
      };
    }
    case roomActions.CREATE_ROOM_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };

    /*************************
     * UPDATE room actions
     ************************/
    case roomActions.UPDATE_ROOM:
      return {
        ...state,
        selected: action.payload,
        action: roomActions.UPDATE_ROOM,
        done: false,
        error: null
      };
    case roomActions.UPDATE_ROOM_SUCCESS: {
      const index = state.data.findIndex(h => h.id === state.selected.id);
      if (index >= 0) {
        const data = [...state.data.slice(0, index), state.selected, ...state.data.slice(index + 1)];
        return {
          ...state,
          data,
          done: true,
          selected: null,
          error: null
        };
      }
      return state;
    }
    case roomActions.UPDATE_ROOM_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

    /*************************
     * DELETE room actions
     ************************/
    case roomActions.DELETE_ROOM: {
      const selected = state.data.find(h => h.id === action.payload);
      return {
        ...state,
        selected,
        action: roomActions.DELETE_ROOM,
        done: false,
        error: null
      };
    }
    case roomActions.DELETE_ROOM_SUCCESS: {
      const data = state.data.filter(h => h.id !== state.selected.id);
      return {
        ...state,
        data,
        selected: null,
        error: null,
        done: true
      };
    }
    case roomActions.DELETE_ROOM_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getRoomsState = createFeatureSelector<State>('rooms');
export const getAllRooms = createSelector(getRoomsState, (state: State) => state.data);
export const getRoom = createSelector(getRoomsState, (state: State) => {
  if (state.action === roomActions.GET_ROOM && state.done) {
    return state.selected;
  } else {
    return null;
  }
});
export const isDeleted = createSelector(
  getRoomsState,
  (state: State) => state.action === roomActions.DELETE_ROOM && state.done && !state.error
);
export const isCreated = createSelector(
  getRoomsState,
  (state: State) => state.action === roomActions.CREATE_ROOM && state.done && !state.error
);
export const isUpdated = createSelector(
  getRoomsState,
  (state: State) => state.action === roomActions.UPDATE_ROOM && state.done && !state.error
);

export const getDeleteError = createSelector(getRoomsState, (state: State) => {
  return state.action === roomActions.DELETE_ROOM ? state.error : null;
});
export const getCreateError = createSelector(getRoomsState, (state: State) => {
  return state.action === roomActions.CREATE_ROOM ? state.error : null;
});
export const getUpdateError = createSelector(getRoomsState, (state: State) => {
  return state.action === roomActions.UPDATE_ROOM ? state.error : null;
});
export const getRoomsError = createSelector(getRoomsState, (state: State) => {
  return state.action === roomActions.GET_ROOMS ? state.error : null;
});
export const getRoomError = createSelector(getRoomsState, (state: State) => {
  return state.action === roomActions.GET_ROOM ? state.error : null;
});
