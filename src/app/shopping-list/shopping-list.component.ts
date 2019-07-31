import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { AppState } from '../app.module';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  ingredientsSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

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
    // this.shoppingListService.ingredientEdited.next(index);
    this.store.dispatch( new ShoppingListActions.StartEdit(index));
  }
}
