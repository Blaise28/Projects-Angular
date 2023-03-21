import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicepsExercisesComponent } from './biceps-exercises/biceps-exercises.component';

const routes: Routes = [
  {
    path: '',
    component: BicepsExercisesComponent,
    title: 'Bicebs Exercises',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class exercice_physiqueRouting {}
