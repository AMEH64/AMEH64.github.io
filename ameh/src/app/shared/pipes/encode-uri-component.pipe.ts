import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'encodeURIComponent',
})
export class EncodeURIComponentPipe implements PipeTransform {
  transform(input: any) {
    return typeof input === 'string'
      ? encodeURIComponent(input)
      : input;
  }
}
