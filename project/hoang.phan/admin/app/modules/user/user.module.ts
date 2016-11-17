import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {UsersListPage} from "./controller/userslist.page";
import {RoleToTextPipe} from "./helper/roleToText";
import {RoleToColorPipe} from "./helper/roleToColor";
import {UserDetailPage} from "./controller/userdetail.page";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        UsersListPage, UserDetailPage, //user manager
        RoleToTextPipe, RoleToColorPipe //helper

    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'users', component: UsersListPage },
            { path: 'user/:id', component: UserDetailPage },
        ])
    ],
    providers: [

    ]
})

export class UserModule {}
