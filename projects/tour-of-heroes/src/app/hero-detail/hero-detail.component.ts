import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  constructor(private heroserv: HeroesService, private route: ActivatedRoute) {}

  id: number = this.route.snapshot.params['id'];
  hero: Hero | null = this.heroserv?.getHeroById(this.id);

  update(name:string) {
    this.heroserv.updateHero(this.id, name);
  }
}
