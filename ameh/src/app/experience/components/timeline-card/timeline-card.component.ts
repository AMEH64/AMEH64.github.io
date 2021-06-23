import { Component, Input, OnInit } from '@angular/core';

import { Experience } from 'app/experience/models';

@Component({
  selector: 'ameh-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {
  @Input() experience!: Experience;

  constructor() { }

  ngOnInit(): void {
    console.log(this.experience);
  }

}
