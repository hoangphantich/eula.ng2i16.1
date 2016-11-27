import { Component, OnInit } from '@angular/core';
import {Config} from "../../../config/config";
import {ApiCallHelper} from "../../../helper/ApiCall.helper";
import {User} from "../model/User";

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
    styleUrls: ['app/modules/user/assets/userslist.css'],
    providers: []
})

/**
 * event controller
 */
export class ArticlesListPage {

    //filter: UserFilter = {} ;
    users: User[];
    totalUser: number;

    constructor(private config: Config, private apiHelper : ApiCallHelper){

    }

    getArticlesFromApi(){
        //get service of user
        let url = "mock_data/user_list.json";

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
        this.getArticlesFromApi();
    }

}