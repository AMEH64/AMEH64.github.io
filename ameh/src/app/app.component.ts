import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ThemeService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ameh';

  public theme$: Observable<string>;

  constructor(private themeService: ThemeService) {
    this.themeService.getTheme();
    this.theme$ = this.themeService.theme$;
  }

  ngOnInit(): void {
  }
}
