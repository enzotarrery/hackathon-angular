import { StuffType } from "./stuff-type";

export interface Stuff {
    id: number,
    label: string,
    weight: number,
    volume: number,
    price?: number
}
