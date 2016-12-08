import { Pipe, PipeTransform } from '@angular/core';

import { Note } from './note';

@Pipe({
    name: 'noteTitle',
    pure: false
})
export class NoteTitlePipe implements PipeTransform {
    private static readonly TITLE_MAX_LENGTH = 20;

    transform(value: Note): any {
        if (!value) {
            return;
        }

        if (!value.text) {
            return '(empty)';
        }

        const title = value.text
            .replace('\n', '')
            .trim();

        return title.length > NoteTitlePipe.TITLE_MAX_LENGTH
            ? title.substr(0, NoteTitlePipe.TITLE_MAX_LENGTH) + '...'
            : title;
    }
}
