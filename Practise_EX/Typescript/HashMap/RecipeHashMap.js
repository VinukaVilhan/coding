"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Recipe_1 = require("./Recipe");
var RecipeHashMap = /** @class */ (function () {
    function RecipeHashMap() {
        this.ratingMaps = new Map();
    }
    RecipeHashMap.prototype.createRecipe = function (ingredients, id, ratings, day) {
        var recipe = new Recipe_1.default(id, ratings, ingredients);
        this.ratingMaps.set(day, recipe);
    };
    RecipeHashMap.prototype.getRecipe = function (day) {
        return this.ratingMaps.get(day);
    };
    RecipeHashMap.prototype.deleteRecipe = function (day) {
        return this.ratingMaps.delete(day);
    };
    RecipeHashMap.prototype.updateRecipe = function (day, recipe) {
        this.ratingMaps.set(day, recipe);
    };
    return RecipeHashMap;
}());
exports.default = RecipeHashMap;
