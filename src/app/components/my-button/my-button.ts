import { Component } from '@angular/core';
import { Person } from '../../classes/person';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css',
})
export class MyButton {
  person: Person = new Person('Youssef', 24, 'youssefoutahar1@gmail.com');
}
