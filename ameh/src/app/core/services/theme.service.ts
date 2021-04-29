import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ThemePreference } from '@core/declarations';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _themes = {
    system: 'system',
    light: 'light',
    dark: 'dark'
  };

  private _theme: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public theme$: Observable<string> = this._theme.asObservable();

  constructor(private storage: StorageMap, private overlayContainer: OverlayContainer) { }

  private get themeDefault(): ThemePreference {
    return 'dark';
  }

  private isSystemPreference(theme: string): boolean {
    return window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;
  }

  public getThemePreference(): Observable<ThemePreference> {
    return this.storage.get('themePreference', { type: 'string' }).pipe(
      map(themePreference => (themePreference as ThemePreference) ?? this.themeDefault)
    );
  }

  public saveThemePreference(value: ThemePreference): Observable<void> {
    return this.storage.set('themePreference', value, { type: 'string'}).pipe(
      map(() => {
        this.getTheme();
      })
    );
  }

  private getThemeFromThemePreference(themePreference: ThemePreference): string {
    if (themePreference === this._themes.light || (themePreference === this._themes.system && this.isSystemPreference(this._themes.light))) {
      return this._themes.light;
    } else if (themePreference === this._themes.dark || (themePreference === this._themes.system && this.isSystemPreference(this._themes.dark))) {
      return this._themes.dark;
    } else {
      return this.themeDefault;
    }
  }

  public getTheme(): void {
    this.storage.get('themePreference', { type: 'string' }).subscribe(response => {
      const themePreference: ThemePreference = response as ThemePreference;
      const theme = this.getThemeFromThemePreference(themePreference);
      this._theme.next(theme);
      this.overlayContainer.getContainerElement()
        .classList
        .toggle(`${this._themes.dark}-theme`, theme === this._themes.dark);
    }, err => console.error(err));
  }
}
