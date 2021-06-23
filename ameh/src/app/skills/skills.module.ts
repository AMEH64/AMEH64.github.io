import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    SharedModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
