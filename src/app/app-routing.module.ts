import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@home/home.component';
import { HomeModule } from '@home/home.module';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'license',
    loadChildren: () =>
      import('./license/license.module').then((m) => m.LicenseModule),
  },
];

@NgModule({
  imports: [HomeModule, RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
