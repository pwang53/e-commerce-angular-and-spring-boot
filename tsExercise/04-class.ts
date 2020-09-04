class Customer {
    public firstName: string = "";
    public lastName: string = "";
}

let myCustomer = new Customer();
myCustomer.firstName = "Peiqi";
myCustomer.lastName = "Wang";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

// Constructor
class Food {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
    }
}

let myFood = new Food("Apple");
console.log(myFood.getName());

myFood.setName("Orange");
console.log(myFood.getName());

// parameter properties
// short cut
class Car {
    constructor(private _brand: string) {}

    public getBrand(): string {
        return this._brand;
    }
}

let myCar = new Car("Benz");
console.log(myCar.getBrand());
 