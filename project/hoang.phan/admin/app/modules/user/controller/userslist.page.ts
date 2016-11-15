import { Component, OnInit } from '@angular/core';
import {Config} from "../../../config/config";
import {ApiCallHelper} from "../../../helper/ApiCall.helper";

declare var $: any;

interface UserFilter {
    keyword: string;
    roleId: number;
    statusId: number;
    pageNr: number;
    perPage: number;
}

@Component({
    selector: 'user-list',
    templateUrl: 'app/modules/user/view/userslist.page.html',
    providers: []
})

/**
 * event controller
 */
export class UsersListPage {

    //filter: UserFilter = {} ;
    users: User[];
    totalUser: number;

    constructor(private config: Config, private apiHelper : ApiCallHelper){

    }

    getUsersFromApi(){
        //get service of user
        let url = this.config.get('userlistApi');

        this.apiHelper.get(url, null, false)
            .subscribe(
                data => {
                    //parse data from service -> bind users
                    let result = data.json().result;

                    this.users = result.users;
                    this.totalUser = result.totalResults;
                }
            );
    }

    ngOnInit(){
        this.getUsersFromApi();
    }

}