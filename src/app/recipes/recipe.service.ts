import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  recipesUpdated = new Subject<Recipe[]>();
  ingredients: Ingredient[];

  constructor(private store: Store<{ ingredients: Ingredient[] }>) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesUpdated.next(recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    // this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    const newList = this.recipes.slice();
    this.recipesUpdated.next(newList)
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    const newList = this.recipes.slice();
    this.recipesUpdated.next(newList)
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    const newList = this.recipes.slice();

    this.recipesUpdated.next(newList);
  }
}
