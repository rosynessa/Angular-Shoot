import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Burger } from '../burger.model';

@Component({
  selector: 'app-burger-list',
  standalone: true,
  imports: [],
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css'],
  animations:[
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class BurgerListComponent implements OnInit {

  burgers: Burger[] = [
    {
      name: 'Classic Burger',
      description: 'The classic burger is an all-time BBQ favourite...',
      price: 16,
      image: 'assets/eiliv.jpg',
      nutrition: { fat: '26g', saturates: '14g', sugars: '18g', salt: '1g' }
    },
    {
      name: 'Double Burger',
      description: 'Twice the meat, twice the fun...',
      price: 18,
      image: 'path/to/double-burger.jpg',
      nutrition: { fat: '30g', saturates: '16g', sugars: '20g', salt: '1.2g' }
    },
    {
      name: 'Green Burger',
      description: 'A healthy alternative...',
      price: 20,
      image: 'path/to/green-burger.jpg',
      nutrition: { fat: '10g', saturates: '5g', sugars: '6g', salt: '0.5g' }
    },
  ];

  selectedBurger: Burger = this.burgers[0];
  selectedBurgerIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  selectBurger(index: number): void {
    this.selectedBurgerIndex = index;
    this.selectedBurger = this.burgers[index];
  }
}
