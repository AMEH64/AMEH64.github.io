import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as AOS from 'aos';

import { ThemeService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'AMEH';

  public theme$: Observable<string>;

  constructor(private themeService: ThemeService) {
    this.themeService.getTheme();
    this.theme$ = this.themeService.theme$;
  }

  ngOnInit(): void {
      AOS.init();
  }
}
