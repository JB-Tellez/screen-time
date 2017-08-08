import { ActionTypes, AppAction } from './actions';
import { AppState, Kid, Family } from "./model";
// reducer
export function appReducer(state: AppState, action: AppAction): AppState {

    let kid: Kid;
    let family: Family;
    let kids: Kid[];
    let families: Family[];

    switch (action.type) {

        case ActionTypes.FAMILY_SIGNED_UP:
        
            console.log(action.type);

            let families = [...state.families];

            families.push(action.payload);

            family = action.payload;

            return { ...state, families, family };

            case ActionTypes.FAMILY_SIGNED_UP:
            
        case ActionTypes.FAMILY_LOGGED_IN:
        case ActionTypes.FAMILY_SELECTED:

            console.log(action.type);

            family = action.payload;

            console.log('family', family);

            return { ...state, family };

        case ActionTypes.KID_CREATED:

            console.log(action.type);

            return state; // DANGER: need to set current kid???

            // kids = [...state.kids];

            // kids.push(action.payload);

            // return { ...state, kids };

        case ActionTypes.KID_UPDATED:

            console.log(action.type);

            family = { ...state.family };

            let newKid = action.payload;

            let existingKid = family.kids.find(kid => kid._id === newKid._id);

            existingKid = Object.assign(existingKid, newKid);

            return { ...state, family };

        case ActionTypes.KID_ADDED:

            console.log(action.type);

            family = { ...state.family };

            family.kids.push(action.payload);

            return { ...state, family };

        case ActionTypes.KID_SELECTED:

            console.log(action.type);

            // DANGER: state.family may be empty!!!

            kid = { _id: "1", name: 'foo', password: 'pass', family: null, minutesPerWeek: 0, bedTimes: [], viewings: [] };

            //state.family.kids.find( k => k.id === action.payload);

            return { ...state, kid };

        case ActionTypes.FAMILY_LOADED:

            console.log(action.type);

            family = action.payload;

            return { ...state, family };

        case ActionTypes.FAMILIES_LOADED:

            console.log(action.type);

            families = action.payload;

            return { ...state, families };

        case ActionTypes.LOAD_FAMILY_AND_SELECT_KID:

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