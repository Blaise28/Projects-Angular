import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  constructor(private heroserv: HeroesService, private route: ActivatedRoute, private router: Router) {}

  id: number = this.route.snapshot.params['id'];
  hero: Hero | null = this.heroserv?.getHeroById(this.id);

  heroName: string = this.hero?.heroName ?? '';

  updateHero(heroForm: NgForm) {
    let value = heroForm.form.value;
    this.heroserv.updateHero(this.id, value.heroName);
    this.router.navigate(["/dashboard"]);
  }
}
