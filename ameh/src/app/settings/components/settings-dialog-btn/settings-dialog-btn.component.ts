import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemeService } from '@core/services';
import { Subscription } from 'rxjs';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'ameh-settings-dialog-btn',
  templateUrl: './settings-dialog-btn.component.html',
  styleUrls: ['./settings-dialog-btn.component.scss']
})
export class SettingsDialogBtnComponent implements OnInit, OnDestroy {
  sub!: Subscription;

  constructor(private dialog: MatDialog, private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.sub = this.themeService.getThemePreference().subscribe({
      next: themePreference => {
        dialogConfig.data = {
          themePreference: themePreference
        };

        const dialogRef = this.dialog.open(SettingsDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => {
          if (!!data && !!data.themePreference) {
            this.sub = this.themeService.saveThemePreference(data.themePreference).subscribe({
              error: err => console.error(err)
            });
          }
        });
      },
      error: err => console.error(err)
    });
  }

}
