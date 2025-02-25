/*
챕터 3-5 제네릭(generics)파트2
*/

class Item<T> {
    #content: T | null;

    constructor(){
        this.#content = null;
    }

    setItem(value: T){
        this.#content = value;
    }

    getItem(): T | null {
        return this.#content;
    }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem(); //100 반환

const stringItem = new Item<string>();
stringItem.setItem("hello");
stringItem.getItem(); //"hello" 반환


//사용자 데이터 / user

interface User {
    id:number;
    name: string;
}

interface Product {
    id:number;
    price: number;
    name: string;
}

interface WithId {
    id : number
}

interface Store<T extends WithId> {
    findById(id: number): T | undefined;
    save(item: T): void;
}

class UserRepository implements Store<User> {
    #Users: User[]=[];

    findById(id: number): User | undefined {
        return this.#Users.find(user => user.id === id);
    }

    save(user: User): void {
        this.#Users.push(user);
    }
}

const userReop = new UserRepository();
userReop.save({
    id: 1,
    name: "Josh"
})
userReop.save({
    id: 2,
    name: "Amy"
})

console.log(userReop.findById(1));


class ProductRepository implements Store<Product> {
    #Products: Product[] = [];

    findById(id: number): Product | undefined {
        return this.#Products.find(product => product.id === id);
    }

    save(product: Product): void {
        this.#Products.push(product);
    }
}

const productRepo = new ProductRepository();

productRepo.save({
    id: 20,
    price: 200,
    name: "Mouse"
})

console.log(productRepo.findById(20));
 