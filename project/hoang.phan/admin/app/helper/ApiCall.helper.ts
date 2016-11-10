import {Injectable} from '@angular/core';
import {URLSearchParams, Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Auth} from '../plugin/auth';
import {Router} from '@angular/router';

@Injectable()
export class ApiCallHelper {
    //private auth:Auth;

    constructor(private http:Http, private _router:Router) {
        //this.auth = new Auth();
    }

    public post(url: string, body: string, params: URLSearchParams, jwt = true) {
        //check params
        if (!params)
            params = new URLSearchParams();

        //build header
        var contentHeaders = new Headers();
        //contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        //check token
        if (jwt) {
            var token = localStorage.getItem('jwt');
            if (token)
                contentHeaders.append('Authorization', 'Bearer' + ' ' + token);
        }

        //return Observable
        return this.http.post(
            url, body,
            {headers: contentHeaders, search: params})
            .catch((error) => {
                this.checkResponse(error);
                return Observable.throw(error);
        });
    }

    private checkResponse(error:any) {
        switch (error.status) {
            case 419:
                alert('Your session expired! Please log in again!');
                //this.auth.logout();
                this._router.navigate(['Login']);
                break;
        }
    }
}