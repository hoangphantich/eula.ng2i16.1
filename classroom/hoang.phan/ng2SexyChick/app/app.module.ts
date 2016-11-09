import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './core/home.component';
import { SexiesComponent } from './sexy/sexies.component';
import { SexyDetailComponent } from './sexy/sexydetail.component';

import { ShareModule } from './share/share.module';
import { FilterSexyPipe } from './helpers/filtersexy.pipe'

/**module bootstrap */
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ShareModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'sexies', component: SexiesComponent },
      { path: 'sexydetail/:id', component: SexyDetailComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
   ],
  declarations: [ AppComponent, HomeComponent, 
      SexiesComponent, SexyDetailComponent,
      FilterSexyPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
