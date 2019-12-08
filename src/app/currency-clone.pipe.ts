import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyClone'
})
export class CurrencyClonePipe implements PipeTransform {
  //  Pipe is a declarable.
  //  Pipe is also a class which implements the PipeTransform interface
  //  name property in the above decorator is how we use it in the template

  //  Type-annotating for this method is always a good idea
  transform(value: any, ...args: any[]): any {
    //  In the example {{ x | pipe:'a':'b':'c' }} x is the value
    //  a, b, c all are elements of args array
    //  ... is spread operator
    //  more information here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    //  Our task is to determine what to return based on value and args
    return null;
  }
}
