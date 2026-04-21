export class Person {
  name: string;
  age: number;
  isMarried: boolean;
  id: number;

  constructor(name: string, age: number, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.id = Date.now();
  }
}
