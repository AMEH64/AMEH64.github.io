import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _themes = {
    system: 'system',
    light: 'light',
    dark: 'dark'
  };

  constructor(private storage: StorageMap) { }

  private get themeDefault(): string {
    return this._themes.dark;
  }

  private isSystemPreference(theme: string): boolean {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
  }

  getThemePreference(): Observable<string> {
    return this.storage.get('themePreference', { type: 'string' }).pipe(
      map(themePreference => themePreference ?? this.themeDefault)
    );
  }

  saveThemePreference(value: string): Observable<void> {
    return this.storage.set('themePreference', value, { type: 'string'}).pipe(
      map(() => this.applyTheme(value))
    );
  }

  getTheme(themePreference: string): string {
    if (themePreference === this._themes.light || (themePreference === this._themes.system && this.isSystemPreference(this._themes.light))) {
      return this._themes.light;
    } else if (themePreference === this._themes.dark || (themePreference === this._themes.system && this.isSystemPreference(this._themes.dark))) {
      return this._themes.dark;
    } else {
      return this.themeDefault;
    }
  }

  applyTheme(themePreference?: string): void {
    const theme = this.getTheme(themePreference ?? this.themeDefault);
    document.body.classList.toggle(`${this._themes.dark}-theme`, theme === this._themes.dark);
  }
}
