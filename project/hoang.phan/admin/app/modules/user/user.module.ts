import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import {UsersListPage} from "./controller/userslist.page";

@NgModule({
    declarations: [ UsersListPage
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
