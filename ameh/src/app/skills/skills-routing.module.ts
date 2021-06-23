import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillsComponent } from './skills.component';

const skillsRoutes: Routes = [
  { path: '', component: SkillsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(skillsRoutes)
  ],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
