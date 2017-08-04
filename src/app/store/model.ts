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
import 'rxjs/add/operator/mergeMap';
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
export type KidSelected = { type: 'KID_SELECTED', payload: number };
export type KidAdded = { type: 'KID_ADDED', payload: Kid };
export type AddKid = { type: 'ADD_KID', payload: Kid };
export type LoadFamily = { type: 'LOAD_FAMILY', payload: Family };
export type LoadFamilyAndSelectKid = { type: 'LOAD_FAMILY_AND_SELECT_KID', payload: {}};

type Action = RouterAction<State> | AddKid | KidUpdated | KidAdded | KidSelected | LoadFamily | LoadFamilyAndSelectKid;

// reducer
export function appReducer(state: AppState, action: Action): AppState {

    let kid: Kid;
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

        case 'KID_SELECTED':

            console.log('KID_SELECTED');
            // DANGER: state.family may be empty!!!

            kid = {id:1,name:'foo',password:'pass', minutesPerWeek:0, bedTimes:[], viewings:[]}; 
            
            //state.family.kids.find( k => k.id === action.payload);

            return {...state, kid};

        case 'LOAD_FAMILY':

            console.log('LOAD_FAMILY');

            family = action.payload;

            return { ...state, family };

        case 'LOAD_FAMILY_AND_SELECT_KID':

            family = action.payload['family'];

            let kid_id = action.payload['kid_id'];

            kid = family.kids.find( k => k['_id'] === kid_id);

            return { ...state, family, kid };

        default:

            return state;
    }
}

// effects

@Injectable()
export class ScreenEffects {

    @Effect() navigateToFamily = this.handleNavigation('family/:id/dashboard', (r: ActivatedRouteSnapshot, state: State) => {

        const id = +r.paramMap.get('id');

        return this.backend.fetchFamily(id).map(resp => ({ type: 'LOAD_FAMILY', payload: resp }));

    });

    @Effect() navigateToKid = this.handleNavigation('family/:family_id/kid/:kid_id', (r: ActivatedRouteSnapshot, state: State) => {

        const kid_id = +r.paramMap.get('kid_id');
        const family_id = +r.paramMap.get('family_id');

        console.log('navigateToKid', family_id, kid_id);

        // TODO: figure out how to conditionally load family if needed
        
        // return of().flatMap(add => [
        //     this.backend.fetchFamily(family_id).map(resp => ({ type: 'LOAD_FAMILY', payload: resp })),
        //     of({type: 'KID_SELECTED', payload: kid_id}),
        // ]);

        // return of({type: 'KID_SELECTED', payload: kid_id});
        
        return this.backend.fetchFamily(family_id).map(resp => ({ type: 'LOAD_FAMILY_AND_SELECT_KID', payload: {family: resp, kid_id} }));
        
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