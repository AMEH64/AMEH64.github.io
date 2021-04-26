import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
  { path: '**', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
