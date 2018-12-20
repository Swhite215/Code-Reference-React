//Mocha - Describe, Run and Build Tests
//Chai - Assertion Engine, Checks Values
//TDD - Write Test -> Code
const expect = require("chai").expect;
const should = require("chai").should;
const assert = require("chai").assert;
const tools = require("./tools");

describe("Tools", () => {
    describe("printName()", () => {
        it("should print the last name first", () => {
            let result = tools.printName({ first: "Alex", last: "Banks" });
            expect(result).to.equal("Banks, Alex");
        });
    });

    describe("loadWiki()", () => {
        //Mocha will wait to finish test when done is invoked
        it("should load wikipedia page", done => {
            tools.loadWiki({ first: "Abraham", last: "Lincoln" }, html => {
                expect(html).to.be.ok;
                done();
            });
        });
    });
});
