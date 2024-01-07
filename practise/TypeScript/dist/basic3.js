"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    getInfo() {
        return this.name + " " + this.country;
    }
}
exports.Animal = Animal;
