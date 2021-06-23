import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, sampleTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'ameh-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss'],
})
export class Navbar2Component implements OnInit {
  public isOnTop$: Observable<boolean> = fromEvent(window, 'scroll').pipe(
    startWith(true),
    sampleTime(300),
    map(() => window.scrollY === 0)
  );

  constructor() {}

  ngOnInit(): void {}
}
