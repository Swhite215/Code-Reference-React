//Design Patterns - Rsuable and Reliable solutions to problems we face frequently

//Gang of Four - Elements of Reusable Object-Oriented Software, Richard Helm, Ralph Johnson, Erich Gamma, John Vlissides
//Design Pattern Essentials - Pattern Name, Problem, Solution, Consequences
//Creational - Abstract Factory, Builder, Factory Method, Protoype, Singleton
//Structural- Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
//Behavioral - Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Mementor, Observer, State, Strategy, Template Method, Visitor
//Other - Module, Revealing Module, Revealing Constructor, Callback, Middleware, Reactor, Blockchain, Scheduler, Publisher Subscriber

//Anti-Patterns - Bad solutions that cause problems
//JavaScript - Modifying prototype, Synchronous execution after initialization, callback hell

//Singleton Pattern - Ensure a class only has one instance, and provide a global point of access to it.
class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestampe} - ${message}`);
    }
}

//Export New Instance - Run Once and then Save It in the Cache
module.exports = new Logger();

//Now in other files, just require the instance of the Logger
const logger = require("./Logger");

//Prototype Clone Method - Add Clone Method to Class allowing us to clone class using a prototype
clone() {
    var proto = Object.getPrototypeOf(this);
    var cloned = Object.create(proto);

    cloned._name = this._name;
    clone._shoppingList = [...this._shoppingList];

    return cloned;
}

//Builder Pattern - Separate the construction of a complex object from its representations so that the same construction process can create different representations
//Anti-Pattern Addressed - Telescoping Constructor - Constructor with too many arguments becomes confusing
//Before
var sue = new Person("Sure", true, true, 60);

//After
var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build(); //Employee and Manager
var bill = new PersonBuilder("Bill").withMoney(600).build(); //Shopper

//Adapter Pattern - Convert the interface of a class into another clients expects. Adapters let classes work together that couldn't otherwise because of incompatiable interfaces.
//Decorator Pattern - Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
class InventoryItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${this.name} costs ${this.price}`);
    }
        
}

class GoldenInventoryItem {
    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }
}

class DiamondInventoryItem {
    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = 10000 + baseItem.price;
        this.cutsGlass = true;
    }

    print() {
        console.log(`${this.name} costs a lot of money...`);
    }
}

module.exports = {InventoryItem, GoldenInventoryItem, DiamondInventoryItem};

//Iterator Pattern - Providing a way to access the elements of aggregate objects sequentially without exposing its underlying representation
//Observer Pattern - Define a one-to-many dependency between objecst so taht when one object changes state, all its dependents are notified and updated automatically.
