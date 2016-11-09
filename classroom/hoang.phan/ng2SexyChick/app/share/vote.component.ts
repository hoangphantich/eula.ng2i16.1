/*
 * import module needed
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
* decorator function
*/
@Component({
    selector: 'vote-ui',
    templateUrl: 'app/share/vote.component.html',
})

/**
 * class AppComponent "event controller"
 * @author hoangpt
 */
export class VoteComponent { 

    @Input() voteNr: number;
    @Output() voteHaha: EventEmitter<string> = new EventEmitter();

    click() {
          this.voteHaha.emit("You vote "+this.voteNr+" + 1.");
    }    
}