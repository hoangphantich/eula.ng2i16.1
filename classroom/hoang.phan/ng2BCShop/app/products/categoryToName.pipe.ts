import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'categoryToName'
})
export class CategoryToNamePipe implements PipeTransform {

    transform(catId: number): string {
        let categories = {
            1: "Toolbox",
            2: "Office",
            3: "Houseware"
        }
        
        return categories[catId];
    }
}
