import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { exercice_physiqueRouting } from './exercice-physique-routing.module';
import { BicepsExercisesComponent } from './biceps-exercises/biceps-exercises.component';
import { GetDataService } from '../services/get-data.service';
import { ExerciceInterceptorProviders } from './InterceptorProviders';



@NgModule({
  declarations: [
    BicepsExercisesComponent
  ],
  imports: [
    CommonModule,
    exercice_physiqueRouting
  ],
  providers: [
    GetDataService,
    ExerciceInterceptorProviders
  ]
})
export class ExercicePhysiqueModule { }
