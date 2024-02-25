import Recipe from "./Recipe";

class RecipeMap
{
    //a simple hashmap where key is a string and vlaue is a recipe
    private ratingMaps:  Map<String, Recipe>;

    CreateRecipe(ingredients: string, id: number, ratings: number, day: string): void
    {
        let first= new Recipe();
        first.id = id;
        first.ratings = ratings;
        first.ingredients = ingredients;
        this.ratingMaps.set(day, first);
    }
}