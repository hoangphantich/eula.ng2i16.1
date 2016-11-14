import { NgModule }  from '@angular/core';
import {Sidebar} from "./sidebar/sidebar.widget";

@NgModule({
    declarations: [ Sidebar ],
    imports: [ ],
    exports: [
        Sidebar,
    ]
})
export class SharedModule { }
