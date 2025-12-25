export class Person {
    constructor(
        public name: string,
        public age: number,
        public email: string
    ) {}

    greet(): string {
        return `Hello, my name is ${this.name}, I'm ${this.age} years old. You can reach me at ${this.email}.`;
    }
}
