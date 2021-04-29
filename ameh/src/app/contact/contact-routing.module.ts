import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
