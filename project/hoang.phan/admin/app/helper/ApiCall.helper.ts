/*import {Injectable} from '@angular/core';
import {URLSearchParams, Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Auth} from '../plugin/auth';
import {Router} from '@angular/router';

@Injectable()
export class ApiCallHelper {
    private auth:Auth;

    constructor(private http:Http, private _router:Router) {
        this.auth = new Auth();
    }

    public get(url, params?, jwt = true) {
        if (!params)
            params = new URLSearchParams();

        //build header
        var contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');


        if (jwt) {
            var token = localStorage.getItem('jwt');
            if (token)
                contentHeaders.append('Authorization', 'Bearer' + ' ' + token);
        }

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(
            url, 
            {headers: contentHeaders, search: params}
            )
            .catch((error) => {
                this.checkResponse(error);
                return Observable.throw(error);
            });
    }

    public post(url, body, params?, jwt = true) {
        if (!params)
            params = new URLSearchParams();

        var contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        if (jwt) {
            var token = localStorage.getItem('jwt');
            if (token)
                contentHeaders.append('Authorization', 'Bearer' + ' ' + token);
        }
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(url, body, {headers: contentHeaders, search: params}).map(res => res).catch((error) => {
            this.checkResponse(error);
            return Observable.throw(error);
        });
    }

    public put(url, body, params?, jwt = true) {
        if (!params)
            params = new URLSearchParams();

        var contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        if (jwt) {
            var token = localStorage.getItem('jwt');
            if (token)
                contentHeaders.append('Authorization', 'Bearer' + ' ' + token);
        }
        //noinspection TypeScriptUnresolvedFunction
        return this.http.put(url, body, {headers: contentHeaders, search: params}).map(res => res).catch((error) => {
            this.checkResponse(error);
            return Observable.throw(error);
        });
    }

    private checkResponse(error:any) {
        switch (error.status) {
            case 419:
                alert('Your session expired! Please log in again!');
                this.auth.logout();
                this._router.navigate(['Login']);
                break;
        }
    }
}*/