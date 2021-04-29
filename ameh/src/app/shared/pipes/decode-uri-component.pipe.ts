import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'decodeURIComponent',
})
export class DecodeURIComponentPipe implements PipeTransform {
  transform(input: any) {
    return typeof input === 'string'
      ? decodeURIComponent(input)
      : input;
  }
}
