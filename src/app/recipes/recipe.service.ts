import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Lemon Pepper Chicken', 
      'Chicken breast baked with lemon and pepper', 
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504195270-lemon-pepper-chicken.jpg'
    ),
    new Recipe(
      'Lemon Pepper Chicken 2', 
      'Chicken breast baked with lemon and pepper', 
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504195270-lemon-pepper-chicken.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
