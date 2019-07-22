import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsUpdated = new Subject<Ingredient[]>();
  ingredientEdited = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3),
    new Ingredient('Celery', 1)
  ];
  
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    const newList = this.ingredients.slice();
    this.ingredientsUpdated.next(newList);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];

    this.ingredientsUpdated.next(this.ingredients);
  }
}
