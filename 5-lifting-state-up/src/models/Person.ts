export class Person {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;

  constructor(name: string, age: number, isMarried: boolean) {
    this.id = Date.now();
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}
