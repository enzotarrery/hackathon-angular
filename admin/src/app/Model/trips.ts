import { Boats } from "./Boats";

export interface Trips {
  startDate: string,
  endDate: string,
  destination: string,
  departure: string,
  state: string,
  boats: Boats,
}
