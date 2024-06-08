console.log('Encapsulation Misollar');

console.log('1-misol');

class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}

const person = new Person("John", 30);
console.log(person.getName());
console.log(person.getAge());

console.log('2-misol');

class BankAccount {
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }

    public setAccountNumber(accountNumber: string): void {
        this.accountNumber = accountNumber;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(balance: number): void {
        this.balance = balance;
    }
}

const account = new BankAccount("123456", 1000.50);
console.log(account.getAccountNumber());
console.log(account.getBalance());

console.log('3-misol');

class Student {
    private studentId: string;
    private studentName: string;

    constructor(studentId: string, studentName: string) {
        this.studentId = studentId;
        this.studentName = studentName;
    }

    public getStudentId(): string {
        return this.studentId;
    }

    public setStudentId(studentId: string): void {
        this.studentId = studentId;
    }

    public getStudentName(): string {
        return this.studentName;
    }

    public setStudentName(studentName: string): void {
        this.studentName = studentName;
    }
}

const student = new Student("S123", "Alice");
console.log(student.getStudentId());
console.log(student.getStudentName());

console.log('4-misol');

class Car {
    private model: string;
    private color: string;

    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
}

const car = new Car("Toyota", "Red");
console.log(car.getModel());
console.log(car.getColor());

console.log('5-misol');

class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }
}

const book = new Book("Effective Java", "Joshua Bloch");
console.log(book.getTitle());
console.log(book.getAuthor());

console.log('Inheritance Misollar');

console.log('1-misol');

class Animal {
    public eat(): void {
        console.log("Animal is eating");
    }

    public sleep(): void {
        console.log("Animal is sleeping");
    }
}

class Dog extends Animal {
    public bark(): void {
        console.log("Dog is barking");
    }

    public wagTail(): void {
        console.log("Dog is wagging its tail");
    }
}

const dog = new Dog();
dog.eat();
dog.sleep();
dog.bark();
dog.wagTail();

console.log('2-misol');

class Employee {
    public work(): void {
        console.log("Employee is working");
    }

    public takeBreak(): void {
        console.log("Employee is taking a break");
    }
}

class Manager extends Employee {
    public conductMeeting(): void {
        console.log("Manager is conducting a meeting");
    }

    public evaluatePerformance(): void {
        console.log("Manager is evaluating performance");
    }
}

const manager = new Manager();
manager.work();
manager.takeBreak();
manager.conductMeeting();
manager.evaluatePerformance();

console.log('3-misol');

class Shape {
    public draw(): void {
        console.log("Drawing a shape");
    }

    public erase(): void {
        console.log("Erasing a shape");
    }
}

class Circle extends Shape {
    public calculateArea(): void {
        console.log("Calculating area of the circle");
    }

    public calculateCircumference(): void {
        console.log("Calculating circumference of the circle");
    }
}

const circle = new Circle();
circle.draw();
circle.calculateArea();
circle.calculateCircumference();
circle.erase();

console.log('4-misol');

class man {
    public speaking(): void {
        console.log("Person is speaking");
    }

    public walking(): void {
        console.log("Person is walking");
    }
}

class Teachers extends man {
    public teach(): void {
        console.log("Teacher is teaching");
    }

    public gradePapers(): void {
        console.log("Teacher is grading papers");
    }
}

const teacher = new Teachers();
teacher.speaking();
teacher.walking();
teacher.teach();
teacher.gradePapers();

