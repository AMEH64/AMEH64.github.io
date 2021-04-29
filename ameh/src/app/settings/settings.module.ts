import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { SettingsDialogBtnComponent } from './components/settings-dialog-btn/settings-dialog-btn.component';

@NgModule({
  declarations: [
    SettingsDialogComponent,
    SettingsDialogBtnComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SettingsDialogBtnComponent
  ]
})
export class SettingsModule { }
