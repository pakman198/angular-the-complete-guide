import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
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

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
