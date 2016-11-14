import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {DashboardPage} from "./controller/dashboard.page";
import {LoginPage} from "./controller/login.page";

@NgModule({
    declarations: [
        DashboardPage,
        LoginPage,
    ],
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginPage },
            { path: 'dashboard', component: DashboardPage },
        ])
    ],
    providers: [
    ]
})

export class CoreModule {}
