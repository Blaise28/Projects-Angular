import { Injectable } from '@angular/core';
import { Hero } from './types/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor() {}

  heroes: Hero[] = [
    { id: 13, heroName: 'Spider Man' },
    { id: 14, heroName: 'Anti Man' },
    { id: 15, heroName: 'Captain America', isOnTop: true },
    { id: 16, heroName: 'Thor', isOnTop: true },
    { id: 17, heroName: 'Hulk' },
    { id: 18, heroName: 'Iron Man', isOnTop: true },
    { id: 19, heroName: 'War Machine' },
    { id: 20, heroName: 'Falcon', isOnTop: true },
    { id: 21, heroName: 'Bucky', isOnTop: true },
  ];

  getHeroes(): Hero[] {
    return this.heroes;
  }
  getHeroById(id: number): Hero | null {
    let hero = this.heroes.find((hero: Hero) => {
      return hero.id == id;
    });
    return hero ?? null;
  }
  getHeroesOnTop(): Hero[] {
    return this.heroes.filter((hero) => {
      return hero.isOnTop === true;
    });
  }

  updateHero(id: number, name: string): void {
    let hero = this.getHeroById(id);
    if (hero) {
      hero.heroName = name;
    }
  }
}
