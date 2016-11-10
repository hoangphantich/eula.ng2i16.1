import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';

import {CoreModule} from "./modules/core/core.module";
import {Layout} from "./layout/basic/noheader.layout";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    //FormsModule,
    RouterModule.forRoot([
      { path: '', component: Layout },
    ]),
    CoreModule
  ],
  declarations: [
    Layout,
  ],
  bootstrap: [ Layout ]
})
export class AppModule { }
