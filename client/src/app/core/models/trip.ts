import { Boat } from "./boat";
import { Stuff } from "./stuff";

export interface Trip {
    id: number,
    startDate: string,
    endDate: string,
    destination: string,
    departure: string,
    state: string,
    boat: Boat,
    stuff?: Stuff
}
