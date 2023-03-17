import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private heroserv: HeroesService){}

  topHeroes = this.heroserv.getHeroesOnTop();
}
