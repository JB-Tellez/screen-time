import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';

// state
export type Kid = { id: number, name: string, password: string, minutesPerWeek: number, bedTimes: number[], viewings:Viewing[] };
export type Adult = { id: number, name: string, password: string, kids: Kid[] }
export type Viewing = { id: number, showId: number, title: string, startTime: number, endTime: number };
export type AppState = { adult: Adult, kids: Kid[], adults: Adult[] };
export type State = { app: AppState };

export const initialState = {
    app: {
        adult: {},
        kids: {}
    }
}

// actions
export type KidUpdated = { type: 'KID_UPDATED', payload: Kid };
export type KidAdded = { type: 'KID_ADDED', payload: Kid };
export type LoadAdults = { type: 'LOAD_ADULTS', payload: Adult[] };
export type LoadAdult = { type: 'LOAD_ADULT', payload: Adult };

type Action = RouterAction<State> | KidUpdated | KidAdded | LoadAdults | LoadAdult;

// reducer
export function appReducer(state: AppState, action: Action): AppState {

    let kids;

    switch (action.type) {

        case 'KID_UPDATED':

            kids = { ...state.kids };

            kids[action.payload.id] = action.payload;

            return { ...state, kids };

        case 'KID_ADDED':

            kids = { ...state.kids};

            kids[action.payload.id] = action.payload;

            return { ...state, kids};

        case 'LOAD_ADULTS' :

            let adults = action.payload;

            return { ...state, adults};

        case 'LOAD_ADULT' :

            let adult = action.payload;

            return {...state, adult};



        default:

            return state;
    }
}