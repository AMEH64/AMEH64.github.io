import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDialogBtnComponent } from './settings-dialog-btn.component';

describe('SettingsDialogBtnComponent', () => {
  let component: SettingsDialogBtnComponent;
  let fixture: ComponentFixture<SettingsDialogBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsDialogBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDialogBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
