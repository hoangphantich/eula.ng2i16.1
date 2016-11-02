/** named import */
import { SexyInfo } from './SexyInfo';

export interface Sexy {
    id: number;
    name: string;
    image: string;
    info: SexyInfo;
    "metric": any, //any
    "catse": number,
    "code": string,
    "vote": number
}