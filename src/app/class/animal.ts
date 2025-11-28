export class Animal {
    constructor(public name: string, public height: number) {}

    weight(k: number): number {
        return k * this.height ** 3; // кг
    }
}