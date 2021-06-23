import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { LicenseComponent } from './license.component';
import { SharedModule } from '@shared/shared.module';

const LICENSE_ROUTES: Route[] = [{ path: '', component: LicenseComponent }];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(LICENSE_ROUTES)],
  exports: [RouterModule],
})
export class LicenseRoutingModule {}
