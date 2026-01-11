import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(value: number, arr: number[]): any {
    for (let index = 0; index < arr.length; index++) {
      if(arr[index]==value)
     return index;
      
    }
    return undefined;
  }

}
