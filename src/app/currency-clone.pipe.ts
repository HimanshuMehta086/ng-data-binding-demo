import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyClone'
})
export class CurrencyClonePipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    switch (args[0]) {
      case 'INR':
        //  Using JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        //  +x will convert x to number
        //  +args[1] || 2 = If args[1] is undefined (not supplied or non-number), use 2
        return `₹ ${value.toFixed(+args[1] || 2)}`;
      case 'USD':
        return `$ ${value.toFixed(+args[1] || 2)}`;
      default:
        return 'Unknown currency';
    }
  }
}
