import  { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/share/star.component.html'
})
export class StarComponent {

    starWidth: number;

    @Input() voteNr: number;
    @Output() ratingHahaha: EventEmitter<string> = new EventEmitter<string>();    

    ngOnChanges(): void {
        this.starWidth = this.voteNr * 86 / 5;
    }

    onClick(): void {
        console.log(this.voteNr);

        //emit to parent component
        this.ratingHahaha.emit(`The rating ${this.voteNr} was clicked!`);
    }    
}