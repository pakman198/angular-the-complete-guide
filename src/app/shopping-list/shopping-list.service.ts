import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsUpdated = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3),
    new Ingredient('Celery', 1)
  ];
  
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    const newList = this.ingredients.slice();
    this.ingredientsUpdated.emit(newList);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];

    this.ingredientsUpdated.emit(this.ingredients);
  }
}
