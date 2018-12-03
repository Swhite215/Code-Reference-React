//A service should operate indepedently in order to be modular in its application
class SomethingService() {
    this.getSomething = async function() {};

    this.getSomethings = async function() {};

    this.updateSomething = async function() {};

    this.createSomething = async function() {};

    this.deleteSomething = async () => {};
}

module.exports = SomethingService;
