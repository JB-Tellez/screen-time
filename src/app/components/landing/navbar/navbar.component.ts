import { CreateViewingAction } from './../../../store/actions';
import { TimeHelperService } from './../../../services/time-helper.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { State, Family, Kid, Viewing } from "../../../store/model";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

    @Input() movie;

    ticks = 0;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

    familySub: Subscription;
    kidSub: Subscription;
    kid: Kid;
    family: Family;
    minutesUntilBed;
    bedtime: Date;
    clockStarted = false;
    screenTimeMinutes;
    screenTimeMinutesRemaining;


    constructor(private router: Router, private store: Store<State>, private timerHelper: TimeHelperService) { }

    ngOnInit() {

        this.familySub = this.store.select('app', 'family').subscribe(family => {
            this.family = family;
        });

        this.kidSub = this.store.select('app', 'kid').subscribe(kid => {
            this.kid = kid;

            if (this.kid) {
                this.minutesUntilBed = this.timerHelper.getMinutesUntilBed(kid);
                this.bedtime = this.timerHelper.getBedtime(kid);
                this.screenTimeMinutesRemaining = this.timerHelper.getMinutesScreenTimeRemaining(kid);
                this.screenTimeMinutes = kid.minutesPerWeek;
            }
        });

    }

    ngOnDestroy() {
        if (this.familySub) this.familySub.unsubscribe();
        if (this.kidSub) this.kidSub.unsubscribe();
    }

    isViewing():boolean {
        
        let is = false;

        if (this.kid && this.kid.viewings) {
            this.kid.viewings.forEach( viewing => {
                if (this.timerHelper.isEndTimeInFuture(viewing)) {
                    is = true;
                }
            });
        }

        return is;
    }

    getCurrentViewing():Viewing {

        let currentViewing = undefined;

        if (this.kid && this.kid.viewings) {
            currentViewing = this.kid.viewings.find( viewing => this.timerHelper.isEndTimeInFuture(viewing));
        }

        return currentViewing;
    }

    gotoLogin() {
        this.router.navigate(['/login']);
    }

    gotoLanding() {
        this.router.navigate(['/']);
    }

    gotoFamilyHome() {
        this.router.navigate([`/family/${this.family._id}`]);
    }

    gotoFamilyDashboard() {
        this.router.navigate([`/family/${this.family._id}/dashboard`]);
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
        const viewing: Viewing = { _id: undefined, movieId: this.movie.id, showId: undefined, kid: this.kid, title: this.movie.title, startTime: new Date(), endTime: undefined }

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
