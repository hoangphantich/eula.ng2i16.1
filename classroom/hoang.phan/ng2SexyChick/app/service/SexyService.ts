import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Sexy } from '../model/Sexy';

@Injectable()
export class SexyService {
    private _endPoint: string = 'mock_data/sexies.json';

    constructor(private _http: Http) {}

    getAllSexy(): Observable<Sexy> {
        let sexies: any = null;

        return this._http.get(this._endPoint)
            .map((response: Response) => {
                sexies = response.json();
                return sexies;
            });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}