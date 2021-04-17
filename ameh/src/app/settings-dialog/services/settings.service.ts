import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  themes = {
    system: 'system',
    light: 'light',
    dark: 'dark',
  }

  constructor() { }
}
