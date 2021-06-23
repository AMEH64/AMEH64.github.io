import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@shared/shared.module';
import { NavbarComponent, FooterComponent } from './components';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ThemeToggleComponent,
    Navbar2Component,
    LayoutComponent,
  ],
  imports: [RouterModule, SharedModule, FontAwesomeModule],
  exports: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    Navbar2Component,
  ],
})
export class CoreModule {}
