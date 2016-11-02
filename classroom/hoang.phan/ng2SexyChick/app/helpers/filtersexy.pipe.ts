import { PipeTransform, Pipe } from '@angular/core';

import { Sexy } from '../model/Sexy';

@Pipe({
    name: 'filterSexy'
})
export class FilterSexyPipe implements PipeTransform {

    transform(sexies: Sexy[], searchString: string): Sexy[] {

        //check null/falsy
        searchString = searchString ? searchString.toLocaleLowerCase() : null;

        //vet can
        if(searchString){
            let sexiesArr = sexies.filter(
                (sexy: Sexy) => {
                    let nameOfSexy = sexy.name.toLowerCase();
    
                    //ha thien lon | thien -> indexOf() = 3
                    return nameOfSexy.indexOf(searchString) > -1;
                }
            );
            
            return sexiesArr;
        }

        return sexies;
    }
}
