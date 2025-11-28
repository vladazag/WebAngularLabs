import { Animal } from './animal';

export class Cat extends Animal {
    k = 15;

    constructor(name: string, height: number, public breed: string) {
        super(name, height);
    }

    weightInGrams(): number {
        return this.weight(this.k) * 1000; // в г
    }
}