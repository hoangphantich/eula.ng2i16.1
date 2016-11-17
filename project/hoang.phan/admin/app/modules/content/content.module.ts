import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import {ArticlesListPage} from "./controller/articleslist.page";

@NgModule({
    declarations: [
        ArticlesListPage,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'articles', component: ArticlesListPage },
            { path: 'article/:id', component: ArticlesListPage },
        ])
    ],
    providers: [

    ]
})

export class UserModule {}
