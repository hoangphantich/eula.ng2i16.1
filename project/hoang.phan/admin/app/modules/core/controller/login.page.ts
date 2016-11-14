import { Component, OnInit, Injectable } from '@angular/core';
//import {JwtHelper} from "ng2-jwt/src/services/ng2-jwt";
import {Router} from "@angular/router";
import {Config} from "../../../config/config";
import {ApiCallHelper} from "../../../helper/ApiCall.helper";

declare var $: any;

@Component({
    selector: 'login-box',
    templateUrl: 'app/modules/core/view/login.page.html',
    providers: [Config, ApiCallHelper]
})


export class LoginPage {

    errorMessage:string;
    //private jwtHelper: JwtHelper;

    constructor(private router:Router, private _config:Config,
                private api: ApiCallHelper) {
        //this.jwtHelper = new JwtHelper();
    }

    login(event: any) {
        event.preventDefault();

        //get from form
        let email = $('#email');
        let password = $('#password');

        //build body json
        let body = JSON.stringify({email, password});

        //call api
        let url = this._config.get('loginApi');
        this.api.post(url, body, null, false)
            .subscribe(
                response => {
                    //if 200 -> redirect

                    //put into state


                    //put jwt into localstorage
                },
                error => {
                },
                () => {
                }
            )
    }

    ngOnInit() {
        // jQuery(function () {
        //     jQuery('body').addClass('login-page');
        //     jQuery('input').iCheck({
        //         checkboxClass: 'icheckbox_square-blue',
        //         radioClass: 'iradio_square-blue',
        //         increaseArea: '20%' // optional
        //     });
        // });
    }
}