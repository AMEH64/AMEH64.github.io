import { NgModule } from '@angular/core';

import { ExperienceComponent } from './experience.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceService } from './services/experience.service';
import { SharedModule } from '@shared/shared.module';
import { SkillsChipListComponent } from './components/skills-chip-list/skills-chip-list.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceCardComponent,
    SkillsChipListComponent
  ],
  imports: [
    SharedModule,
    ExperienceRoutingModule
  ],
  providers: [
    ExperienceService
  ]
})
export class ExperienceModule { }
