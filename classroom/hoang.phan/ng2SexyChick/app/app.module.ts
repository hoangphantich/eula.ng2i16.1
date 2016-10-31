import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './core/home.component';
import { SexiesComponent } from './sexy/sexies.component';

/**module bootstrap */
@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'sexies', component: SexiesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
   ],
  declarations: [ AppComponent, HomeComponent, SexiesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
