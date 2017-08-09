import { CreateViewingAction } from './../../../store/actions';
import { TimeHelperService } from './../../../services/time-helper.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { State, Kid, Family, Viewing } from "../../../store/model";


@Component({
    selector: 'app-screentimer',
    templateUrl: './screentimer.component.html',
    styleUrls: ['./screentimer.component.css'],

})
export class ScreentimerComponent implements OnInit, OnDestroy {

    @Input() movie;

    ticks = 0;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

    appSub: Subscription;
    kid: Kid;
    family: Family;
    minutesUntilBed;
    clockStarted = false;

    constructor(private store: Store<State>, private timerHelper:TimeHelperService) { }

    ngOnInit() {
        
        this.appSub = this.store.select('app').subscribe( app => {
            this.kid = app.kid;
            this.family = app.family;
            this.minutesUntilBed = this.timerHelper.getMinutesUntilBed(this.kid);
        });
    }

    ngOnDestroy() {
        this.appSub.unsubscribe();
    }

    private startTimer() {

        this.clockStarted = true;

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;

                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );

        // create viewing
        const viewing:Viewing = {_id: undefined, movieId:this.movie.id, showId: undefined, kid: this.kid, title: this.movie.title, startTime:new Date(), endTime: undefined }
        
        this.store.dispatch(new CreateViewingAction(viewing));
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

    private stopTimer() {
        this.clockStarted = false;
        this.sub.unsubscribe();

    }

}
