
/**
 * import module needed
 */
import { Component } from '@angular/core';

/*
* decorator function
*/
@Component({
    selector: 'home-wrapper',
    templateUrl: 'app/core/home.component.html'
})

/**
 * class AppComponent "event controller"
 * @author hoangpt
 */
export class HomeComponent { 
    //variable: type
    //public variable
    pageTitle: string = "Introduction";

}
