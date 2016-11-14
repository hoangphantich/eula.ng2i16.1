import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {UsersListPage} from "./controller/userslist.page";

@NgModule({
    declarations: [ UsersListPage
    ],
    imports: [
        RouterModule.forChild([
            { path: 'users', component: UsersListPage },
            { path: 'user/:id/:name', component: UsersListPage },
        ])
    ],
    providers: [
        //JwtHelper
    ]
})

export class UserModule {}
