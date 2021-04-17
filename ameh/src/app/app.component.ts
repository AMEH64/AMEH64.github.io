import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ameh';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.applyTheme();
  }

}
