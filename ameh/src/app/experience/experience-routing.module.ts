import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './experience.component';

const experienceRoutes: Routes = [
  { path: '', component: ExperienceComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(experienceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExperienceRoutingModule { }
