"use strict";
/*
챕터 3-3 클래스 (classes)
*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Country_name;
class Continent {
    constructor(name) {
        this.continentName = name;
    }
    getContinentName() {
        return this.continentName;
    }
}
class Country extends Continent {
    constructor(continentName, name, capital) {
        super(continentName);
        _Country_name.set(this, void 0);
        __classPrivateFieldSet(this, _Country_name, name, "f");
        this.capital = capital;
    }
    getInfo() {
        this.continentName;
        return `${__classPrivateFieldGet(this, _Country_name, "f")},${this.capital},${this.getContinentName()}`;
    }
}
_Country_name = new WeakMap();
let country = new Country("Asia", "South Korea", "Seoul");
console.log(country.getInfo());
// country.name;
// country.continentName
// country.name= "South Korea";
// country.capital= "Seoul";
class AbstractCountry {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
    setup() {
        console.log("setup complete");
    }
}
class MyConutry extends AbstractCountry {
    displayInfo() {
        console.log("display info called");
    }
}
const myConutry = new MyConutry("Germany", "Berlin");
myConutry.setup();
myConutry.displayInfo();
