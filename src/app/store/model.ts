import { BackendService } from './../services/backend.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { ActivatedRouteSnapshot, Params } from "@angular/router";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';

// state
export type Kid = { id: number, name: string, password: string, minutesPerWeek: number, bedTimes: number[], viewings: Viewing[] };
export type Family = { id: number, name: string, password: string, kids: Kid[] }
export type Viewing = { id: number, showId: number, title: string, startTime: number, endTime: number };
export type AppState = { family: Family, kid: Kid };
export type State = { app: AppState };

export const initialState = {
    app: {
        family: {},
        kid: {}
    }
}

// actions
export type KidUpdated = { type: 'KID_UPDATED', payload: Kid };
export type KidAdded = { type: 'KID_ADDED', payload: Kid };
export type AddKid = { type: 'ADD_KID', payload: Kid };
export type LoadFamily = { type: 'LOAD_FAMILY', payload: Family };

type Action = RouterAction<State> | AddKid | KidUpdated | KidAdded | LoadFamily;

// reducer
export function appReducer(state: AppState, action: Action): AppState {

    let kid;
    let family: Family;

    switch (action.type) {

        case 'KID_UPDATED':

            family = { ...state.family };

            let newKid = action.payload;

            let existingKid = family.kids.find( kid => kid.id === newKid.id );

            existingKid = Object.assign(existingKid, newKid);

            return { ...state, family};

        case 'KID_ADDED':

            family = {...state.family};

            family.kids.push(action.payload);

            return { ...state, family };

        case 'LOAD_FAMILY':

            family = action.payload;

            return { ...state, family };

        default:

            return state;
    }
}

// effects

@Injectable()
export class ScreenEffects {

    @Effect() navigateToFamily = this.handleNavigation('families/:id', (r: ActivatedRouteSnapshot, state: State) => {

        const id = +r.paramMap.get('id');

        return this.backend.fetchFamily(id).map(resp => ({ type: 'LOAD_FAMILY', payload: resp }));

    });

    @Effect() navigateToFamilies = this.handleNavigation('families', (r: ActivatedRouteSnapshot, state: State) => {

        return this.backend.fetchFamilies().map(resp => ({ type: 'LOAD_FAMILIES', payload: resp }));

    });

    @Effect() addKid = this.actions.ofType('ADD_KID').
        concatMap((a: AddKid) => {
            return this.backend.addKid(a.payload).
                map(resp => ({ type: 'KID_ADDED', payload: resp }));
        });

    constructor(private actions: Actions, private store: Store<State>, private backend: BackendService) { }

    private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
        const nav = this.actions.ofType(ROUTER_NAVIGATION).
            map(firstSegment).
            filter(s => s.routeConfig.path === segment);

        return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
            console.log('Network error', e);
            return of();
        });
    }
}


function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}


// function createFilters(p: Params): Filters {
//   return {speaker: p['speaker'] || null, title: p['title'] || null, minRating: p['minRating'] ? +p['minRating'] : 0};
// }