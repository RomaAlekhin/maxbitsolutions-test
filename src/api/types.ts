type Measure = {
  [Key in `strMeasure${number}`]: string | null;
};

type Ingredient = {
  [Key in `strIngredient${number}`]: string | null;
};

export interface Cocktail extends Measure, Ingredient {
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
}
