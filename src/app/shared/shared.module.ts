import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { PolaroidComponent } from "./components";
import { EncodeUriComponentPipe } from "./pipes";

@NgModule({
  declarations: [PolaroidComponent, EncodeUriComponentPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    PolaroidComponent,
    EncodeUriComponentPipe,
  ],
})
export class SharedModule {}
