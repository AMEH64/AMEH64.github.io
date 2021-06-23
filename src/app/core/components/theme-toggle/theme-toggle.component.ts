import { Component, OnInit } from '@angular/core';
import {
  IconName,
  IconPrefix,
  IconProp,
} from '@fortawesome/fontawesome-svg-core';

import { Theme } from '@shared/enum';

@Component({
  selector: 'ameh-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  public get theme(): Theme {
    return (localStorage.getItem('ameh-io-theme') as Theme) ?? Theme.dark;
  }

  public set theme(value: Theme) {
    localStorage.setItem('ameh-io-theme', value.toString());
  }

  public get icon(): IconProp {
    const prefix: IconPrefix = 'fas';
    const name: IconName =
      this.theme === Theme.dark ? 'cloud-sun' : 'cloud-moon';
    return [prefix, name];
  }

  constructor() {
    document.body.classList.toggle('dark', this.theme === Theme.dark);
  }

  public toggleTheme(event: any): void {
    this.theme = this.theme === Theme.dark ? Theme.light : Theme.dark;
    document.body.classList.toggle('dark', this.theme === Theme.dark);
  }

  ngOnInit(): void {}
}
