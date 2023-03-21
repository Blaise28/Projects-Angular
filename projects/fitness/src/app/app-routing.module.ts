import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exercices',
    loadChildren: () =>
      import('./exercice-physique/exercice-physique-routing.module').then(
        (m) => m.exercice_physiqueRouting
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
