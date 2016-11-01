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
    
    //primitive / plain
    sexies: [any] = [
        {
            "name":"LO THI TON",
            "image": "mock_data/images/lothiton.jpg",
            "info":{
                "age":18,
                "desc": "Yeu mau tim, ghet gia doi, thich tien, dai gia."
            },
            "metric":{
                "v1": 100,
                "v2": 100,
                "v3": 100,                
                "height": 170,
                "weight": 48
            },
            "catse": 2000,
            "code": "BAN ANH HUNG",
            "vote": 500
        },
        {
            "name":"HA THIEN LON",
            "image": "mock_data/images/hathienlon.jpg",
            "info":{
                "age":17,
                "desc": "Thich selfie."
            },
            "metric":{
                "v1": 90,
                "v2": 90,
                "v3": 90,                
                "height": 170,
                "weight": 48
            },
            "catse": 2000,
            "code": "BAN ANH DUNG",
            "vote": 500
        }
    ];

    //public prop
    flagShow: boolean = false; //default

    showInfo(){
        this.flagShow = !this.flagShow;
    }

}
