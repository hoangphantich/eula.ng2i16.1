import {Pipe, PipeTransform} from '@angular/core';

/*
 * A Mapping from Role ID to Color Label
 * +---+---------------+
 * | 1 | success       |
 * +---+---------------+
 * | 2 | warning       |
 * +---+---------------+
 * | 3 | primary       |
 * +---+---------------+
 *
 * Usage:
 *  value | roleToColorLabel
 * Example:
 *  {{ 1 | roleToColorLabel }}
 *  formats to: success
 */
@Pipe({name: 'roleToColor'})
export class RoleToColorPipe implements PipeTransform {
    transform(value:number):string {
        let mapping = {
            1: 'success',
            2: 'warning',
            3: 'primary'
        };

        return mapping[value];
    }
}