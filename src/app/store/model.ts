import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';

// state
export type Kid = { id: number, name: string, password: string, minutesPerWeek: number, bedTimes: Date[], viewings:Viewing[] };
export type Adult = { id: number, name: string, password: string, kids: Kid[] }
export type Viewing = { id: number, showId: number, minutesSpent: number };
export type AppState = { adult: Adult, kids: Kid[] };
export type State = { app: AppState };

export const initialState = {
    app: {
        adult: {id:1,name:'Heidi',password:'pass', kids:[
            {id:1, name:'Mercy', password:'pass', minutesPerWeek:420, bedTimes:[], viewings:[
                {id:1,showId:1,minutesSpent:45},
                {id:2,showId:2,minutesSpent:100},
            ]},
            {id:2, name:'Ramona', password:'pass', minutesPerWeek:420, bedTimes:[], viewings:[]},
        ]},
        kids: {}
    }
}

// actions
export type KidUpdated = { type: 'KID_UPDATED', payload: Kid };
export type KidAdded = { type: 'KID_ADDED', payload: Kid };

type Action = RouterAction<State> | KidUpdated | KidAdded;

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

        default:

            return state;
    }
}