import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeUriComponent'
})
export class EncodeUriComponentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
