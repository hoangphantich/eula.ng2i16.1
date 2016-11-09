/*
 * import module needed
 */
import { Component } from '@angular/core';
import { Sexy } from '../model/Sexy';
import { FilterSexyPipe } from '../helpers/filtersexy.pipe';
import { SexyService } from './../service/SexyService';

/*
* decorator function
*/
@Component({
    selector: 'sexiest-wrapper',
    templateUrl: 'app/sexy/sexies.component.html',
    providers: [SexyService]
    
})

/**
 * class AppComponent "event controller"
 * @author hoangpt
 */
export class SexiesComponent { 
    //variable: type
    //public variable
    pageTitle: string = "SexyChick List";

    //prop binding demo -> for styling
    widthImage: number = 150;

    //filter word
    filterWord: string = "";
    
    //primitive / plain
    sexies: Sexy[];

    constructor(private _service: SexyService){
    }

    //run after constructor
    ngOnInit() { 
        console.log("Init view");

        this._service.getAllSexy()
                        //lazy async
                        .subscribe(
                            (sexies: Sexy[]) => { 
                                this.sexies = sexies;
                            },
                            (error: any) => {},
                            () => {
                                console.log("Complete ajax call");
                            }
                        );
    }

    ngAfterViewInit(){
        console.log("View render finish");
    
        this.flagShow = true;
    }
    
    //public prop
    flagShow: boolean = false; //default

    showInfo(){
        this.flagShow = !this.flagShow;
    }

    clickVote(event: any){
        console.log(event + " customize");
    }
}
