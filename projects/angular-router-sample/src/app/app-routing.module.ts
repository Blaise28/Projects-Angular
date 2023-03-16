import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const name: string = 'B@soft';
const routes: Routes = [
  {
    path: 'crisis-list',
    component: CrisisListComponent,
    title: name + ' | crisis',
  },
  {
    path: 'heroes-list',
    component: HeroesListComponent,
    title: name + ' | Heroes',
  },
  { path: 'home', component: HomeComponent, title: name + ' | home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: name + ' | NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
