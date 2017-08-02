import { AllUserData } from './../../../shared/to/all-user-data';
import { Action } from '@ngrx/store';
import { Kid } from "../../../shared/model/kid";
export const ADD_KID_ACTION = 'ADD_KID_ACTION';
export const LOAD_KIDS_ACTION = 'LOAD_KIDS_ACTION';
export class addKidAction implements Action {
    
    readonly type = ADD_KID_ACTION;

    constructor(public payload: Kid) {}

}

export class loadKidsAction implements Action {

    readonly type = LOAD_KIDS_ACTION;

    constructor(public payload: AllUserData) {}
}