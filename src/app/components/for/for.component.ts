import { Component, OnInit } from '@angular/core';
import Heroes from '../../configs/hero';
interface Hero {
  id: string;
  name: string;
}

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styles: [
    `.even{
      background-color: #7c4958;
      color: #fff;
    }
    .odd{
      color: #fff;
      background-color: brown;
    }`
  ]
})
export class ForComponent implements OnInit {
  heroes: Hero[] = Heroes;
  value = '';
  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    this.heroes.push({
      id: 'hero_' + Date.now(),
      name: this.value
    });
  }
  reset(): void{
    this.heroes = [
      { id: 'hero_0', name: '盖伦1' },
      { id: 'hero_1', name: '赵信3' },
      { id: 'hero_2', name: '嘉文' },
      { id: 'hero_3', name: '易大师5' },
      { id: 'hero_4', name: '泰达米尔7' }
    ];
  }
  trackByHero(hero: Hero): string {
    return hero.id;
  }

}
