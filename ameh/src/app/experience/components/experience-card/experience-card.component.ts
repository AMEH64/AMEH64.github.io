import { Component, Input, OnInit } from '@angular/core';

import { Experience } from 'app/experience/models';

@Component({
  selector: 'ameh-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience!: Experience;

  constructor() { }

  ngOnInit(): void {
  }

}
