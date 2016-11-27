import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(products: IProduct[], filterBy: string, catId: number): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        let productsTemp: IProduct[] = products;

        //filer by keyword
        if(filterBy){
            //compare filterBy (lowercase) with name (lowsercase)
            productsTemp = products.filter(
                (product: IProduct) => {
                    let name = product.productName.toLocaleLowerCase();    
                    if(name.indexOf(filterBy) > -1){
                        return true;
                    }
                    return false;
                }
            );
        }

        //only filter if =1, =2, =3
        //productsTemp = catId > 0? productsTemp.filter((product: IProduct) => product.catId == catId):productsTemp;
        if(catId > 0){
            productsTemp = productsTemp.filter((product: IProduct) => product.catId == catId);
        }

        //filter by catId
        
        return productsTemp;

    }
}
