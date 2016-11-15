import { NgModule }  from '@angular/core';
import {CommonModule} from "@angular/common";

import {Sidebar} from "./sidebar/sidebar.widget";

@NgModule({
    declarations: [ Sidebar ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        Sidebar
    ]
})
export class WidgetModule { }
