import { Pipe, PipeTransform } from '@angular/core';

import { Note } from './note';

@Pipe({
    name: 'noteTitle'
})
export class NoteTitlePipe implements PipeTransform {
    private static readonly TITLE_MAX_LENGTH = 20;

    transform(value: Note): any {
        const title = value.text;

        return title.length > NoteTitlePipe.TITLE_MAX_LENGTH
            ? title.substr(0, NoteTitlePipe.TITLE_MAX_LENGTH) + '...'
            : title;
    }
}
