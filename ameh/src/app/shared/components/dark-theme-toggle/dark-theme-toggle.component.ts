import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ameh-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
  styleUrls: ['./dark-theme-toggle.component.scss']
})
export class DarkThemeToggleComponent implements OnInit {
  isDarkThemeOn: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDarkThemeOn = true;
      document.body.classList.add('dark-theme');
    } else {
      this.isDarkThemeOn = false;
      document.body.classList.remove('dark-theme');
    }
  }

}
