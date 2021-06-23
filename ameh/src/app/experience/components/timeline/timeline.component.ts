import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'app/experience/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ameh-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() experiences$!: Observable<Experience[]>;

  constructor() { }

  ngOnInit(): void {
  }
}
