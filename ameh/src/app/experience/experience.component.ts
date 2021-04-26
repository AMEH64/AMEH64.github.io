import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Experience } from './models';
import { ExperienceService } from './services/experience.service';

@Component({
  selector: 'ameh-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ExperienceComponent implements OnInit {

  public experiences$: Observable<Experience[]>;

  constructor(private experienceService: ExperienceService) {
    this.experienceService.getExperiences();
    this.experiences$ = this.experienceService.experiences$;
  }

  ngOnInit(): void {
  }
}
