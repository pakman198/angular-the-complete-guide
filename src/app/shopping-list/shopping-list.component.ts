import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{ ingredients: Ingredient[] }>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.shoppingListService.getIngredients();
    // this.ingredientsSubscription = this.shoppingListService.ingredientsUpdated
    // .subscribe((ingredients: Ingredient[]) => {
    //   this.ingredients = ingredients;
    // });
  }

  ngOnDestroy() {
    // this.ingredientsSubscription.unsubscribe();
  }

  editItem(index: number) {
    this.shoppingListService.ingredientEdited.next(index);
  }
}
