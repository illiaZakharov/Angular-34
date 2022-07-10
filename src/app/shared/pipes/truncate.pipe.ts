import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(text: string, limit: number = 120, completeWord: boolean = true, endSymbol: string = '...'): string {
        if (text.length <= limit) {
            return text;
        }

        if (completeWord) {
            limit = text.substring(0, limit).lastIndexOf(' ') || 120;
        }

        return text.substring(0, limit) + endSymbol;
    }

}
