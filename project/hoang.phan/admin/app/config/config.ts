import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    private endpointGateway = "https://api.dev.bontrax.com/v1/";
    private _config = {};

    constructor() {
        this._config = {
            /**
             * AUTHEN
             */
            //'loginApi': this.endpointGateway+'login',
            //'userRegisterApi': this.endpointGateway+'register',
            'loginApi': 'mock_data/login.json',
            //'userRegisterApi': 'mock/user_register_fallback.json',


            /**
             * USER MANAGER
             */
            'userlistApi': 'mock_data/user_list.json',
            'userdetailApi': 'mock_data/user_detail.json?%id%',
            //'userlistApi': this.endpointGateway+'users',
            //'userdetailApi': this.endpointGateway+'users/%id%',

        }
    }

    get(key:string) {
        return this._config[key];
    }
}