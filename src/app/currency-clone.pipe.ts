import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyClone'
})
export class CurrencyClonePipe implements PipeTransform {
  transform(
    value: number,
    currencyFormat?: string, //  optional argument
    decimalDigits?: number //  optional argument
  ): string {
    switch (currencyFormat) {
      case 'INR':
        //  + is necessary as the user can still pass a non-number
        return `₹ ${value.toFixed(+decimalDigits || 2)}`;
      case 'USD':
        return `$ ${value.toFixed(+decimalDigits || 2)}`;
      default:
        return 'Unknown currency';
    }
  }
}
