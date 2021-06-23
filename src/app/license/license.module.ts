import { NgModule } from '@angular/core';

import { LicenseComponent } from './license.component';
import { LicenseRoutingModule } from './license-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LicenseComponent],
  imports: [SharedModule, LicenseRoutingModule],
})
export class LicenseModule {}
