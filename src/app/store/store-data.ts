import { Kid } from "../../../shared/model/kid";

export interface StoreData {

    kids: {[key:number]: Kid};

}

export const INITIAL_STORE_DATA: StoreData = {

    kids: {},
};