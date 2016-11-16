import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import {UsersListPage} from "./controller/userslist.page";
import {RoleToTextPipe} from "./helper/roleToText";
import {RoleToColorPipe} from "./helper/roleToColor";

@NgModule({
    declarations: [
        UsersListPage,
        RoleToTextPipe,
        RoleToColorPipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'users', component: UsersListPage },
            { path: 'user/:id/:name', component: UsersListPage },
        ])
    ],
    providers: [

    ]
})

export class UserModule {}
