export type Kid = { _id: string, name: string, password: string, family: Family, minutesPerWeek: number, bedTimes: number[], viewings: Viewing[] };
export type Family = { _id: string, name: string, password: string, kids: Kid[] }
export type Viewing = { _id: string, showId: string, title: string, startTime: number, endTime: number };
export type AppState = { family: Family, kid: Kid, families: Family[], kids: Kid[] };
export type State = { app: AppState };

export const initialState = {
    app: {
        family: {},
        kid: {},

        // TODO: remove and/or move to adminState
        families: [],
        kids: []
    }
}