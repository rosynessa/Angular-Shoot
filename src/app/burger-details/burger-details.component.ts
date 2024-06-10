import { Component,Input } from '@angular/core';
import { Burger } from '../burger.model';

@Component({
  selector: 'app-burger-details',
  standalone: true,
  imports: [],
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent {
  @Input() burger : Burger = {
    name: '',
    description: '',
    price: 0,
    image: '',
    nutrition: {
      fat: '',
      saturates: '',
      sugars: '',
      salt: ''
  }
  
}
}
