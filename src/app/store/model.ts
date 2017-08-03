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
import 'rxjs/add/operator/catch';

// state
export type Kid = { id: number, name: string, password: string, minutesPerWeek: number, bedTimes: number[], viewings: Viewing[] };
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

            kids = { ...state.kids };

            kids[action.payload.id] = action.payload;

            return { ...state, kids };

        case 'LOAD_ADULTS':

            let adults = action.payload;

            return { ...state, adults };

        case 'LOAD_ADULT':

            let adult = action.payload;

            return { ...state, adult };

        default:

            return state;
    }
}


@Injectable()
export class ScreenEffects {

    @Effect() navigateToParent = this.handleNavigation('parent/:id', (r: ActivatedRouteSnapshot, state: State) => {

        const id = +r.paramMap.get('id');

        console.log('navigateToParent');

        return this.backend.getAdult(id).map(resp => ({ type: 'LOAD_ADULT', payload: resp }));

    });

    //   @Effect() navigateToTalks = this.handleNavigation('talks', (r: ActivatedRouteSnapshot) => {
    //     const filters = createFilters(r.params);
    //     return this.backend.findTalks(filters).map(resp => ({type: 'TALKS_UPDATED', payload: {...resp, filters}}));
    //   });

    //   @Effect() navigateToTalk = this.handleNavigation('talk/:id', (r: ActivatedRouteSnapshot, state: State) => {
    //     const id = +r.paramMap.get('id');
    //     if (! state.app.talks[id]) {
    //       return this.backend.findTalk(+r.paramMap.get('id')).map(resp => ({type: 'TALK_UPDATED', payload: resp}));
    //     } else {
    //       return of();
    //     }
    //   });

    //   @Effect() rateTalk = this.actions.ofType('RATE').
    //     switchMap((a: Rate) => {
    //       return this.backend.rateTalk(a.payload.talkId, a.payload.rating).switchMap(() => of()).catch(e => {
    //         console.log('Error', e);
    //         return of({type: 'UNRATE', payload: {talkId: a.payload.talkId}});
    //       });
    //     });

    //   @Effect() watchTalk = this.actions.ofType('WATCH').
    //     map((a: Watch) => {
    //       this.watch.watch(a.payload.talkId);
    //       return {type: 'TALK_WATCHED', payload: a.payload};
    //     });

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