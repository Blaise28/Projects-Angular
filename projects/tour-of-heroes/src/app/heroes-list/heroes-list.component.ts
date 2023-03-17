import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  constructor(private heroes: HeroesService){}

  heroesList = this.heroes.getHeroes();
}
