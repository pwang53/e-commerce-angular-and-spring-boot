var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var myCustomer = new Customer();
myCustomer.firstName = "Peiqi";
myCustomer.lastName = "Wang";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
// Constructor
var Food = /** @class */ (function () {
    function Food(name) {
        this._name = name;
    }
    Food.prototype.getName = function () {
        return this._name;
    };
    Food.prototype.setName = function (name) {
        this._name = name;
    };
    return Food;
}());
var myFood = new Food("Apple");
console.log(myFood.getName());
myFood.setName("Orange");
console.log(myFood.getName());
