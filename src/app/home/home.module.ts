import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, HeroComponent, ContactComponent } from './components';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SkillsComponent,
  ],
  imports: [CommonModule, SharedModule, FontAwesomeModule],
  exports: [HomeComponent],
})
export class HomeModule {}
