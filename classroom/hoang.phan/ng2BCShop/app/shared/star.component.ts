import  { Component, OnChanges, Input,
          Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star', //webcomponent
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

/**
 * <ai-star rating="12" ></ai-star>
 */
export class StarComponent implements OnChanges {
    /**
     * prop binding, dau vao
     */
    @Input() rating: number;
    
    /**
     * prop binding
     */
    starWidth: number;

    /**
     * dau ra
     */
    @Output() outputRating: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    /**
     * event binding
     */
    onClick(): void {
        //message emit outside
        this.outputRating.emit(`The rating ${this.rating} was clicked!`);
    }
}
