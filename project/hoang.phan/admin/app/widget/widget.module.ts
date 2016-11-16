import { NgModule }  from '@angular/core';
import {CommonModule} from "@angular/common";

import {Sidebar} from "./sidebar/sidebar.widget";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [ Sidebar ],
    imports: [
        CommonModule, //use for ngif
        RouterModule  //use for menu at the sidebar
    ],
    exports: [
        CommonModule,
        Sidebar
    ]
})
export class WidgetModule { }
