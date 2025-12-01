import { Animal } from './animal';

export class Dog extends Animal {
    k = 25;

    constructor(name: string, height: number, public breed: string, public guardObject: string) {
        super(name, height);
    }

    weightInGrams(): number {
        return this.weight(this.k) * 1000; // в г
    }

    guard(): string {
        return "Собака" + this.name + " охороняє " + this.guardObject + ".";
    }
}