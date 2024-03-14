class Recipe {
    public id: number;
    public ratings: number;
    public ingredients: string;

    constructor(id: number, ratings: number, ingredients: string) {
        this.id = id;
        this.ratings = ratings;
        this.ingredients = ingredients;
    }
}

export default Recipe;