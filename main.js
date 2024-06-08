var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Encapsulation Misollar');
console.log('1-misol');
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var person = new Person("John", 30);
console.log(person.getName());
console.log(person.getAge());
console.log('2-misol');
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    BankAccount.prototype.setAccountNumber = function (accountNumber) {
        this.accountNumber = accountNumber;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    return BankAccount;
}());
var account = new BankAccount("123456", 1000.50);
console.log(account.getAccountNumber());
console.log(account.getBalance());
console.log('3-misol');
var Student = /** @class */ (function () {
    function Student(studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    }
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    Student.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    Student.prototype.getStudentName = function () {
        return this.studentName;
    };
    Student.prototype.setStudentName = function (studentName) {
        this.studentName = studentName;
    };
    return Student;
}());
var student = new Student("S123", "Alice");
console.log(student.getStudentId());
console.log(student.getStudentName());
console.log('4-misol');
var Car = /** @class */ (function () {
    function Car(model, color) {
        this.model = model;
        this.color = color;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    return Car;
}());
var car = new Car("Toyota", "Red");
console.log(car.getModel());
console.log(car.getColor());
console.log('5-misol');
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    return Book;
}());
var book = new Book("Effective Java", "Joshua Bloch");
console.log(book.getTitle());
console.log(book.getAuthor());
console.log('Inheritance Misollar');
console.log('1-misol');
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Animal is eating");
    };
    Animal.prototype.sleep = function () {
        console.log("Animal is sleeping");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Dog is barking");
    };
    Dog.prototype.wagTail = function () {
        console.log("Dog is wagging its tail");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.eat();
dog.sleep();
dog.bark();
dog.wagTail();
console.log('2-misol');
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.work = function () {
        console.log("Employee is working");
    };
    Employee.prototype.takeBreak = function () {
        console.log("Employee is taking a break");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.conductMeeting = function () {
        console.log("Manager is conducting a meeting");
    };
    Manager.prototype.evaluatePerformance = function () {
        console.log("Manager is evaluating performance");
    };
    return Manager;
}(Employee));
var manager = new Manager();
manager.work();
manager.takeBreak();
manager.conductMeeting();
manager.evaluatePerformance();
console.log('3-misol');
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log("Drawing a shape");
    };
    Shape.prototype.erase = function () {
        console.log("Erasing a shape");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calculateArea = function () {
        console.log("Calculating area of the circle");
    };
    Circle.prototype.calculateCircumference = function () {
        console.log("Calculating circumference of the circle");
    };
    return Circle;
}(Shape));
var circle = new Circle();
circle.draw();
circle.calculateArea();
circle.calculateCircumference();
circle.erase();
console.log('4-misol');
var man = /** @class */ (function () {
    function man() {
    }
    man.prototype.speaking = function () {
        console.log("Person is speaking");
    };
    man.prototype.walking = function () {
        console.log("Person is walking");
    };
    return man;
}());
var Teachers = /** @class */ (function (_super) {
    __extends(Teachers, _super);
    function Teachers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teachers.prototype.teach = function () {
        console.log("Teacher is teaching");
    };
    Teachers.prototype.gradePapers = function () {
        console.log("Teacher is grading papers");
    };
    return Teachers;
}(man));
var teacher = new Teachers();
teacher.speaking();
teacher.walking();
teacher.teach();
teacher.gradePapers();
