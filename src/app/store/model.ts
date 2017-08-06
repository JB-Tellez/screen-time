import { BackendService } from './../services/backend.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { ActivatedRouteSnapshot, Params, Router } from "@angular/router";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/catch';

// state
export type Kid = { _id: string, name: string, password: string, family: Family, minutesPerWeek: number, bedTimes: number[], viewings: Viewing[] };
export type Family = { _id: string, name: string, password: string, kids: Kid[] }
export type Viewing = { _id: string, showId: string, title: string, startTime: number, endTime: number };
export type AppState = { family: Family, kid: Kid, families: Family[], kids: Kid[], loggedIn: boolean };
export type State = { app: AppState };

export const initialState = {
    app: {
        family: {},
        kid: {},
        families: [],
        kids: [],
        loggedIn: false
    }
}

// actions
export type KidUpdated = { type: 'KID_UPDATED', payload: Kid };
export type KidSelected = { type: 'KID_SELECTED', payload: string };
export type KidAdded = { type: 'KID_ADDED', payload: Kid };
export type AddKid = { type: 'ADD_KID', payload: Kid };
export type LoadFamily = { type: 'LOAD_FAMILY', payload: string };
export type FamilyLoaded = { type: 'FAMILY_LOADED', payload: Family };
export type FamiliesLoaded = { type: 'FAMILIES_LOADED', payload: Family[] };
export type KidsLoaded = { type: 'KIDS_LOADED', payload: Kid[] };
export type LoadFamilies = { type: 'LOAD_FAMILIES', payload: Family[] };
export type LoadKids = { type: 'LOAD_KIDS', payload: Kid[] };
export type LoadFamilyAndSelectKid = { type: 'LOAD_FAMILY_AND_SELECT_KID', payload: {} };
export type CreateFamily = { type: 'CREATE_FAMILY', payload: Family };
export type SignUpFamily = { type: 'SIGN_UP_FAMILY', payload: Family };
export type CreateKid = { type: 'CREATE_KID', payload: Kid };
export type FamilyCreated = { type: 'FAMILY_CREATED', payload: Family };
export type FamilySignedUp = { type: 'FAMILY_SIGNED_UP', payload: Family };
export type KidCreated = { type: 'KID_CREATED', payload: Kid };
export type TestAction = { type: 'TEST_ACTION', payload:{}};

// TODO: effects only actions needed in this list?
type Action = RouterAction<State> | FamilyCreated | FamilySignedUp | KidCreated | AddKid | KidUpdated | KidAdded | KidSelected | LoadKids | FamilyLoaded | FamiliesLoaded | KidsLoaded | LoadFamilies | LoadFamilyAndSelectKid;

// reducer
export function appReducer(state: AppState, action: Action): AppState {

    let kid: Kid;
    let family: Family;
    let kids: Kid[];
    let families: Family[];

    switch (action.type) {

        case 'FAMILY_SIGNED_UP':

            console.log(action.type);

            families = [...state.families];

            families.push(action.payload);

            family = action.payload;

            const loggedIn = true;

            return { ...state, families, family, loggedIn };

        case 'FAMILY_CREATED':

            console.log(action.type);

            families = [...state.families];

            families.push(action.payload);

            return { ...state, families };

        case 'KID_CREATED':

            console.log(action.type);

            kids = [...state.kids];

            kids.push(action.payload);

            return { ...state, kids };

        case 'KID_UPDATED':

            console.log(action.type);

            family = { ...state.family };

            let newKid = action.payload;

            let existingKid = family.kids.find(kid => kid._id === newKid._id);

            existingKid = Object.assign(existingKid, newKid);

            return { ...state, family };

        case 'KID_ADDED':

            console.log(action.type);

            family = { ...state.family };

            family.kids.push(action.payload);

            return { ...state, family };

        case 'KID_SELECTED':

            console.log(action.type);

            // DANGER: state.family may be empty!!!

            kid = { _id: "1", name: 'foo', password: 'pass', family: null, minutesPerWeek: 0, bedTimes: [], viewings: [] };

            //state.family.kids.find( k => k.id === action.payload);

            return { ...state, kid };

        case 'FAMILY_LOADED':

            console.log(action.type);

            family = action.payload;

            return { ...state, family };

        case 'FAMILIES_LOADED':

            console.log(action.type);

            families = action.payload;

            return { ...state, families };

        case 'KIDS_LOADED':

            console.log(action.type);

            kids = action.payload;

            return { ...state, kids };

        case 'LOAD_FAMILY_AND_SELECT_KID':

            console.log(action.type);

            family = action.payload['family'];

            let kid_id = action.payload['kid_id'];

            kid = family.kids.find(k => k['_id'] === kid_id);

            return { ...state, family, kid };

        default:
            
            console.log(action.type);

            return state;
    }
}

// effects

@Injectable()
export class ScreenEffects {

    @Effect() navigateToAdmin = this.handleNavigation('admin', (r: ActivatedRouteSnapshot, state: State) => {

        return of({ type: 'LOAD_FAMILIES' }, { type: 'LOAD_KIDS' });
    });

    @Effect() navigateToFamily = this.handleNavigation('family/:id', (r: ActivatedRouteSnapshot, state: State) => {

        // DANGER: not DRY with below
        const id = r.paramMap.get('id');

        if (state.app.family && state.app.family._id === id) {

            console.log('already got right family loaded');

            return of();
        }

        return of({ type: 'LOAD_FAMILY', payload: id });

    });

    @Effect() navigateToFamilyDashboard = this.handleNavigation('family/:id/dashboard', (r: ActivatedRouteSnapshot, state: State) => {

        // DANGER: not DRY with above
        const id = r.paramMap.get('id');

        if (state.app.family && state.app.family._id === id) {

            console.log('already got right family loaded');

            return of();
        }

        return of({ type: 'LOAD_FAMILY', payload: id });

    });

    @Effect() navigateToKid = this.handleNavigation('family/:family_id/kid/:kid_id', (r: ActivatedRouteSnapshot, state: State) => {

        const kid_id = r.paramMap.get('kid_id');
        const family_id = r.paramMap.get('family_id');

        console.log('navigateToKid', family_id, kid_id);

        // TODO: figure out how to conditionally load family if needed

        return this.backend.fetchFamily(family_id).map(resp => ({ type: 'LOAD_FAMILY_AND_SELECT_KID', payload: { family: resp, kid_id } }));

    });

    @Effect() addKid = this.actions.ofType('ADD_KID').
        concatMap((a: AddKid) => {

            return this.backend.addKid(a.payload).
                map(resp => ({ type: 'KID_ADDED', payload: resp }));
        });

    @Effect() loadFamily = this.actions.ofType('LOAD_FAMILY').switchMap((a: LoadFamily) => {
        console.log('loadFamily action', a.payload);
        return this.backend.fetchFamily(a.payload).map(resp => ({ type: 'FAMILY_LOADED', payload: resp }));
    });

    @Effect() loadFamilies = this.actions.ofType('LOAD_FAMILIES').switchMap((a: LoadFamilies) => {
        console.log('loadFamilies action');
        return this.backend.fetchFamilies().map(resp => ({ type: 'FAMILIES_LOADED', payload: resp }));
    });

    @Effect() loadKids = this.actions.ofType('LOAD_KIDS').switchMap((a: LoadKids) => {
        console.log('loadKids action');
        return this.backend.fetchKids().map(resp => ({ type: 'KIDS_LOADED', payload: resp }));
    });

    @Effect() createFamily = this.actions.ofType('CREATE_FAMILY').switchMap((a: CreateFamily) => {
        console.log('createFamily action');
        return this.backend.createFamily(a.payload).map(resp => ({ type: 'FAMILY_CREATED', payload: resp }));
    });

    @Effect() signUpFamily = this.actions.ofType('SIGN_UP_FAMILY').switchMap((a: SignUpFamily) => {
        
        console.log('signUpFamily action');

        return this.backend.createFamily(a.payload).concatMap(resp => {
            return of({ type: 'FAMILY_CREATED', payload: resp }, { type: 'TEST_ACTION', payload: resp });
        })

    });


    @Effect() createKid = this.actions.ofType('CREATE_KID').switchMap((a: CreateKid) => {
        console.log('createKid action');
        return this.backend.createKid(a.payload).map(resp => ({ type: 'KID_CREATED', payload: resp }));
    });

    @Effect() testAction = this.actions.ofType('TEST_ACTION').switchMap((a: TestAction) => {
        console.log('test action payload', a.payload);
        this.router.navigate([`/family/${a.payload['_id']}`]);
        return of();
    });

    constructor(private actions: Actions, private store: Store<State>, private backend: BackendService, private router: Router) { }

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