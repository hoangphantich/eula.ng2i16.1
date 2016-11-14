import { Component, OnInit } from '@angular/core';
import {Config} from "../../../config/config";
import {ApiCallHelper} from "../../../helper/ApiCall.helper";

declare var $: any;

@Component({
    selector: 'login-box',
    templateUrl: 'app/modules/user/view/userslist.page.html',
    providers: []
})


export class UsersListPage {

    constructor(private config: Config, private apiHelper : ApiCallHelper){

    }

}