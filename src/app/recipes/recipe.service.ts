import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  ingredients: Ingredient[];

  private recipes: Recipe[] = [
    new Recipe(
      'Lemon Pepper Chicken', 
      'Chicken breast baked with lemon and pepper', 
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504195270-lemon-pepper-chicken.jpg',
      [
        new Ingredient('Lemons', 5),
        new Ingredient('Chicken', 1)
      ]
    ),
    new Recipe(
      'Lemon Pepper Chicken 2', 
      'Chicken breast baked with lemon and pepper', 
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504195270-lemon-pepper-chicken.jpg',
      [
        new Ingredient('Parcil', 1),
        new Ingredient('Pepper', 1)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
