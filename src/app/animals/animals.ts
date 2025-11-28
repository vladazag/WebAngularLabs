import { Component } from '@angular/core';
import { Cat } from '../class/cat';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.html',
  styleUrls: ['./animals.scss']
})
export class AnimalsComponent {
  result = '';

  createCat() {
    const name = (document.getElementById('animal-name') as HTMLInputElement).value;
    const height = parseFloat((document.getElementById('animal-height') as HTMLInputElement).value);
    const breed = (document.getElementById('cat-breed') as HTMLInputElement).value;

    if (!name || !height || !breed) {
      this.result = 'Будь ласка, заповніть усі поля';
      return;
    }

    if (height <= 0) {
      this.result = 'Ріст має бути більше 0';
      return;
    }

    const cat = new Cat(name, height, breed);
    const weight = cat.weightInGrams().toFixed(2);

    this.result = "Кішка " + cat.name + ", порода " + cat.breed + ", вага: " + weight + "г";
  }
}