import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { BackendService } from '../services/backend.service';
import { Store } from '@ngrx/store';
import { AddKidAction, LoadFamilyAction, LoadFamiliesAction, SignUpFamilyAction, LogInFamilyAction, CreateKidAction, GotoFamilyAction, ActionTypes } from './actions';
import { Effect, Actions } from '@ngrx/effects';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { State } from './model';
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

            return of({type:ActionTypes.FAMILY_SELECTED, payload: state.app.family});
        }

        return of({ type: 'LOAD_FAMILY', payload: id });

    });

    @Effect() navigateToFamilyDashboard = this.handleNavigation('family/:id/dashboard', (r: ActivatedRouteSnapshot, state: State) => {

        // DANGER: not DRY with above
        const id = r.paramMap.get('id');

        if (state.app.family && state.app.family._id === id) {

            console.log('already got right family loaded');

            return of({type:ActionTypes.FAMILY_SELECTED, payload: state.app.family});
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
        concatMap((a: AddKidAction) => {

            return this.backend.addKid(a.payload).
                map(resp => ({ type: 'KID_ADDED', payload: resp }));
        });

    @Effect() loadFamily = this.actions.ofType('LOAD_FAMILY').switchMap((a: LoadFamilyAction) => {
        console.log('loadFamily action', a.payload);
        return this.backend.fetchFamily(a.payload).map(resp => ({ type: 'FAMILY_LOADED', payload: resp }));
    });

    @Effect() loadFamilies = this.actions.ofType('LOAD_FAMILIES').switchMap((a: LoadFamiliesAction) => {
        console.log('loadFamilies action');
        return this.backend.fetchFamilies().map(resp => ({ type: 'FAMILIES_LOADED', payload: resp }));
    });

    @Effect() signUpFamily = this.actions.ofType('SIGN_UP_FAMILY').switchMap((a: SignUpFamilyAction) => {
        
        console.log(a.type);

        return this.backend.signUpFamily(a.payload).concatMap(resp => {
            return of({ type: 'FAMILY_CREATED', payload: resp }, { type: 'GOTO_FAMILY_ACTION', payload: resp });
        })

    });

    @Effect() logInFamily = this.actions.ofType('LOG_IN_FAMILY').switchMap((a: LogInFamilyAction) => {
        
        console.log('logInFamily action');

        return this.backend.logInFamily(a.payload).concatMap(resp => {
            console.log('loginFamily', resp);
            return of({ type: 'FAMILY_LOGGED_IN', payload: resp }, { type: 'GOTO_FAMILY_ACTION', payload: resp });
        })

    });


    @Effect() createKid = this.actions.ofType('CREATE_KID').switchMap((a: CreateKidAction) => {
        console.log('createKid action', a.payload);
        return this.backend.createKid(a.payload).map(resp => ({ type: 'KID_CREATED', payload: resp }));
    });

    @Effect() gotoFamily = this.actions.ofType('GOTO_FAMILY_ACTION').switchMap((a: GotoFamilyAction) => {
        console.log('goto family action payload', a.payload);
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