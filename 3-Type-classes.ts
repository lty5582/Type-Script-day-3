/*
챕터 3-3 클래스 (classes)
*/

interface ContinentInterface {
    getContinentName(): string;
}

interface CountryInterface {
    capital: string;
    getInfo(): string;
}

class Continent implements ContinentInterface{
    protected continentName: string;

    constructor(name:string){
        this.continentName = name;
    }
    getContinentName(){
        return this.continentName
    }
}


class Country extends Continent implements CountryInterface{
    #name: string;
    capital: string;

    constructor(continentName:string, name: string, capital: string) {
        super(continentName)
        this.#name = name;
        this.capital = capital;
    }

    getInfo(){
        this.continentName
        return`${this.#name},${this.capital},${this.getContinentName()}`
    }
}

let country = new Country("Asia","South Korea", "Seoul");
console.log(country.getInfo());

// country.name;
// country.continentName

// country.name= "South Korea";
// country.capital= "Seoul";

abstract class AbstractCountry {
    name:string;
    capital:string;

    constructor(name:string, capital:string){
        this.name = name;
        this.capital = capital;
    }

    setup(): void{
        console.log("setup complete");
        
    }

    abstract displayInfo(): void;
}

class MyConutry extends AbstractCountry {
    displayInfo() {
        console.log("display info called");
    }
}

const myConutry =new MyConutry("Germany", "Berlin");
myConutry.setup();
myConutry.displayInfo();