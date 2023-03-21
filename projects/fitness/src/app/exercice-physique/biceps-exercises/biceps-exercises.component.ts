import { Component, Input } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-biceps-exercises',
  templateUrl: './biceps-exercises.component.html',
  styleUrls: ['./biceps-exercises.component.scss'],
})
export class BicepsExercisesComponent {
  data: any;
  url: string = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';

  constructor(private dataService: GetDataService) {}
  index: number = 1;

  getData() {
    this.dataService.getConfig(this.url).subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.getData();
  }
}
