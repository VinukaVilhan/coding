import Recipe from "./Recipe";

class RecipeHashMap {
    private ratingMaps: Map<String, Recipe>;

    constructor() {
        this.ratingMaps = new Map<String, Recipe>();
    }

    createRecipe(ingredients: string, id: number, ratings: number, day: string): void {
        let recipe = new Recipe(id, ratings, ingredients);
        this.ratingMaps.set(day, recipe);
    }

    getRecipe(day: string): Recipe | undefined {
        return this.ratingMaps.get(day);
    }

    deleteRecipe(day: string): boolean {
        return this.ratingMaps.delete(day);
    }

    updateRecipe(day: string, recipe: Recipe): void {
        this.ratingMaps.set(day, recipe);
    }
}

export default RecipeHashMap;