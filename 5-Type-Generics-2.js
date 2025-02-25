"use strict";
/*
챕터 3-5 제네릭(generics)파트2
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
var _Item_content, _UserRepository_Users, _ProductRepository_Products;
class Item {
    constructor() {
        _Item_content.set(this, void 0);
        __classPrivateFieldSet(this, _Item_content, null, "f");
    }
    setItem(value) {
        __classPrivateFieldSet(this, _Item_content, value, "f");
    }
    getItem() {
        return __classPrivateFieldGet(this, _Item_content, "f");
    }
}
_Item_content = new WeakMap();
const numberItem = new Item();
numberItem.setItem(100);
numberItem.getItem(); //100 반환
const stringItem = new Item();
stringItem.setItem("hello");
stringItem.getItem(); //"hello" 반환
class UserRepository {
    constructor() {
        _UserRepository_Users.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _UserRepository_Users, "f").find(user => user.id === id);
    }
    save(user) {
        __classPrivateFieldGet(this, _UserRepository_Users, "f").push(user);
    }
}
_UserRepository_Users = new WeakMap();
const userReop = new UserRepository();
userReop.save({
    id: 1,
    name: "Josh"
});
userReop.save({
    id: 2,
    name: "Amy"
});
console.log(userReop.findById(1));
class ProductRepository {
    constructor() {
        _ProductRepository_Products.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _ProductRepository_Products, "f").find(product => product.id === id);
    }
    save(product) {
        __classPrivateFieldGet(this, _ProductRepository_Products, "f").push(product);
    }
}
_ProductRepository_Products = new WeakMap();
const productRepo = new ProductRepository();
productRepo.save({
    id: 20,
    price: 200,
    name: "Mouse"
});
console.log(productRepo.findById(20));
