import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { SettingsDialogBtnComponent } from './components/settings-dialog-btn/settings-dialog-btn.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    SettingsDialogBtnComponent,
    SettingsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SettingsDialogBtnComponent
  ],
  providers: [
    SettingsService
  ],
  entryComponents: [
    SettingsDialogComponent
  ]
})
export class SettingsDialogModule { }
