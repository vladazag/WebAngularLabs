import { Component } from '@angular/core';
import { Cat } from '../class/cat';
import { Dog } from '../class/dog';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.html',
  styleUrls: ['./animals.scss']
})
export class AnimalsComponent {
  resultCat = '';
  resultDog = '';

  createCat() {
    const name = (document.getElementById('cat-name') as HTMLInputElement).value;
    const height = parseFloat((document.getElementById('cat-height') as HTMLInputElement).value);
    const breed = (document.getElementById('cat-breed') as HTMLInputElement).value;

    if (!name || !height || !breed) {
      this.resultCat = 'Будь ласка, заповніть усі поля';
      return;
    }

    if (height <= 0) {
      this.resultCat = 'Ріст має бути більше 0';
      return;
    }

    const cat = new Cat(name, height, breed);
    const weight = cat.weightInGrams().toFixed(2);

    this.resultCat = "Кішка " + cat.name + ", порода " + cat.breed + ", вага: " + weight + "г";
  }

    createDog() {
    const name = (document.getElementById('dog-name') as HTMLInputElement).value;
    const height = parseFloat((document.getElementById('dog-height') as HTMLInputElement).value);
    const breed = (document.getElementById('dog-breed') as HTMLInputElement).value;
    const guardObject = (document.getElementById('guardObject') as HTMLInputElement).value;

    if (!name || !height || !breed || !guardObject) {
      this.resultDog = 'Будь ласка, заповніть усі поля';
      return;
    }

    if (height <= 0) {
      this.resultDog = 'Ріст має бути більше 0';
      return;
    }

    const dog = new Dog(name, height, breed, guardObject);
    const weight = dog.weightInGrams().toFixed(2);
    const guard = dog.guard();

    this.resultDog = "Собака " + dog.name + ", порода " + dog.breed + ", вага: " + weight + "г. " + guard;
  }
}