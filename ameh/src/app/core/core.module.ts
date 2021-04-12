import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EnsureImportedOnceGuard } from './ensure-import-once-guard';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
  ]
})
export class CoreModule extends EnsureImportedOnceGuard {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
