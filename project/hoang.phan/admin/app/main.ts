// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


//Context, state keep
export class Main {
    currentUser: {
        "name": "hoang"
    }

    //init log
    log(){
        //teamcity, 

    }

    //init db
    initdb() {
        
    }
        
}

