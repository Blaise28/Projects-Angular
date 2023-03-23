import { Component } from '@angular/core';
import { AnimalState } from './states/animal-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cowshed';

  constructor(public animState: AnimalState){}
}
