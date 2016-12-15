import {Injectable} from '@angular/core';
import {URLSearchParams, Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Auth} from '../plugin/auth';

@Injectable()
export class ApiCallHelper {

    constructor(private _http:Http, private _router:Router) {
    }

    _buildHeader (): Headers {
        let contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        return contentHeaders;
    }

    /**
     * GET
     *
     * @author hoangpt
     *
     * @param url
     * @param params
     * @param jwt
     * @returns {Observable<R>}
     */
    public get(url : string, params: URLSearchParams , jwt = true)
        : Observable<Response> {
        if (!params)
            params = new URLSearchParams();

        let contentHeaders = this._buildHeader();

        if (jwt) {
            var token = localStorage.getItem('jwt');
            if (token)
                contentHeaders.append('Authorization', 'Bearer' + ' ' + token);
        }

        //Response Observable
        return this._http.get(url, {headers: contentHeaders, search: params})
                .catch((error) => {
                    this._checkResponse(error);
                    return Observable.throw(error);
                });
    }


    /**
     * POST
     *
     * @author hoangpt
     *
     * @param url
     * @param body
     * @param params
     * @param jwt
     * @returns {Observable<R>}
     */
    public post(url: string, body: string, params: URLSearchParams, jwt = true)
        : Observable<Response> {
        //check params
        if (!params)
            params = new URLSearchParams();

        //build header
        let contentHeaders = this._buildHeader();

        //check token
        if (jwt) {
            var token = localStorage.getItem('jwt');
            if (token)
                contentHeaders.append('Authorization', 'Bearer' + ' ' + token);
        }

        //return Observable
        return this._http.post(
            url,
            body,
            {headers: contentHeaders, search: params})
            .catch((error) => {
                this._checkResponse(error);
                return Observable.throw(error);
        });
    }

    _checkResponse(error:any) {
        switch (error.status) {
            case 419:
                //check authenticate session from server
                alert('Your session expired! Please log in again!');
                //this.auth.logout();
                this._router.navigate(['Login']);
                break;
        }
    }
}