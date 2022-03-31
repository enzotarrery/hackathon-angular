import { Boat } from "./boat";
import { Stuff } from "./stuff";

export interface Trip {
    startDate: string,
    endDate: string,
    destination: string,
    departure: string,
    state: string,
    boat: Boat,
    stuff?: Stuff
}
