import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {Config} from "../../../config/config";
import {ApiCallHelper} from "../../../helper/ApiCall.helper";
import {User} from "../model/User";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/modules/user/view/userdetail.page.html',
    styleUrls: [],
    providers: []
})

/**
 * event controller
 */
export class UserDetailPage {

    private currentUser: User;
    private userId:string;
    private form: FormGroup;
    private submitAttempt:boolean = false;


    constructor(private _config: Config, private _apiHelper : ApiCallHelper,
                private _route: ActivatedRoute){

    }

    getUserFromApi(){
        //build URL
        let id = +this._route.snapshot.params['id'];

        //get service of user
        let url = this._config.get('userdetailApi');
        url = url.replace("%id%", id);

        this._apiHelper.get(url, null, false)
            .subscribe(
                data => {
                    //parse data from service -> bind users
                    let result = data.json().result;

                    this.currentUser = result;
                    console.log(this.currentUser);
                }
            );
    }

    ngOnInit(): void {
        //read data api
        this.getUserFromApi();

        //log

        //...
    }

}