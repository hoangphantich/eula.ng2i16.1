import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {Layout} from "./layout/basic/layout";
import {Config} from "./config/config";
import {ApiCallHelper} from "./helper/ApiCall.helper";

import {CoreModule} from "./modules/core/core.module";
import {UserModule} from "./modules/user/user.module";
import {WidgetModule} from "./widget/widget.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule, //for ajax
    FormsModule, //for form CRUD
    RouterModule.forRoot([
      { path: 'dashboard', component: Layout },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]),

    WidgetModule, //share module
    CoreModule, //core of our app
    UserModule
  ],
  declarations: [
    Layout,
  ],
  providers: [ Config, ApiCallHelper ], //helper, pipe for use in all app module
  bootstrap: [ Layout ]
})
export class AppModule { }
