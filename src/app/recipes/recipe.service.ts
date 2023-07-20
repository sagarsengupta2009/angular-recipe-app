import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new Subject<any>();
  recipeChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [
    new Recipe(
      "Mutton Rezala",
      "A spicy mutton heaven with thick gravy",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Food-Mutton-Rezala.jpg/1200px-Food-Mutton-Rezala.jpg",
      [new Ingredient("Mutton", 10), new Ingredient("Masala", 20)]
    ),
    new Recipe(
      "Butter Chicken",
      "A sweet chicken heaven with light gravy",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Butter_Chicken_1.jpg/1200px-Butter_Chicken_1.jpg",
      [new Ingredient("Chicken", 10), new Ingredient("Butter", 20)]
    ),
    new Recipe(
      "Mutton Korma",
      "A less spicy chunk mutton with deep-thick gravy",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lamb_rendang.jpg/1200px-Lamb_rendang.jpg",
      [new Ingredient("Mutton", 10), new Ingredient("Masala", 20)]
    ),
    new Recipe(
      "Prawn Malai curry",
      "A mustard-spicy prawn thick gravy dish",
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Chingri_Malai_Curry.jpg",
      [new Ingredient("Prawn", 10), new Ingredient("Mustard", 20)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

