import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureComponent } from './components/feature/feature.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FeatureComponent, SkillsComponent],
  imports: [SharedModule]
})
export class HomeModule {}
