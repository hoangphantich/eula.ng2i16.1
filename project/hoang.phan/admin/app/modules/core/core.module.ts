import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { LoginComponent } from './controller/login.component';
import {Config} from "../../config/config";
//import {JwtHelper} from "ng2-jwt/src/services/ng2-jwt";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
        ])
    ],
    providers: [
        //JwtHelper
        Config
    ]
})

export class CoreModule {}
