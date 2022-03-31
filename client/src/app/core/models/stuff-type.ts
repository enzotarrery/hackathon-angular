import { Stuff } from "./stuff";

export interface StuffType {
    id: number,
    name: string,
    stuffs?: Stuff[];
}
