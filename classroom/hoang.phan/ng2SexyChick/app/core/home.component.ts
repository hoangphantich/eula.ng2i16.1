
/**
 * import module needed
 */
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
    //type
    pageTitle: string = "Introduction";
    private titleService: Title = new Title();

    constructor() {
        this.titleService.setTitle(this.pageTitle);
    }

}
