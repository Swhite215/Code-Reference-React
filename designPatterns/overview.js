//Design Patterns - Rsuable and Reliable solutions to problems we face frequently

//Gang of Four - Elements of Reusable Object-Oriented Software, Richard Helm, Ralph Johnson, Erich Gamma, John Vlissides
//Design Pattern Essentials - Pattern Name, Problem, Solution, Consequences
//Creational - Abstract Factory, Builder, Factory Method, Protoype, Singleton
//Structural- Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
//Behavioral - Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Mementor, Observer, State, Strategy, Template Method, Visitor
//Other - Module, Revealing Module, Revealing Constructor, Callback, Middleware, Reactor, Blockchain, Scheduler, Publisher Subscriber

//Anti-Patterns - Bad solutions that cause problems
//JavaScript - Modifying prototype, Synchronous execution after initialization, callback hell.
//Telescoping Constructor - Constructor with too many arguments becomes confusing to understand what those arguments are later in our code.

//Creational Patterns:
//Singleton - Ensure a class only has one instance, and provide a global point of access to it.
//Prototype - Instantiates a new object by copying all of the properties of an existing object, creating an independent clone.
//Factory - Define an interface for creating an object, but let subclasses decide which class to instantiate. Lets a class defer instantion to subclasses
//Builder - Separate the construction of a complex object from its representation so that the same construction process can create different representations.
//Abstract Factory - Used to provde a client with a set of related or dependant objects. The "family" of objects created by the factory are determined at run-time.

//Structural Patterns:
//Adapter - Convert the interface of a class into another clients expect. Adapter lets clqasses work together that couldn't otherwise because of incompatiable interfaces.
//Proxy - Provide a surrogate or placeholder for another object to control access to it.
//Composite - Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
//Decorator - Attach Additional Responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
//Bridge - Used to separate the abstract elements of a class from the implementation details, providing the means to replace the implementation details without modifying the abstraction.
//Facade - Used to define a simplified interface to a more complex subsystem.
//Flyweight - Used to reduce the memory and resource usage for complex models containing many hundreds, thousands or hundreds of thousands of similar objects

//Behavioral Patterns:
//Chain of Responsibility - Avoid coupling the sender of a request to its receiver by giving more than one object a chance to deal with the request. Chain the receiving objects and pas the request along the chain.
//Command - Encapsulate a request as an object, thereby letting you parameterize with different requests, queue or log requests, and support undoable operations.
//Iterator - Provide a way to access the elements of an afggregate object sequentially without exposing its underlying representation.
//Observer - Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
//Strategy - Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets algorithm vary independently from clients that use it.
