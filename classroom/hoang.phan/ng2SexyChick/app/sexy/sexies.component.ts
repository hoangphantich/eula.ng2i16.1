
/**
 * import module needed
 */
import { Component } from '@angular/core';

/*
* decorator function
*/
@Component({
    selector: 'sexiest-wrapper',
    templateUrl: 'app/sexy/sexies.component.html'
})

/**
 * class AppComponent "event controller"
 * @author hoangpt
 */
export class SexiesComponent { 
    //variable: type
    //public variable
    pageTitle: string = "SexyChick List";

}
