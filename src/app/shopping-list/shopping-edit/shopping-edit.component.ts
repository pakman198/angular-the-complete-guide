import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: false}) form: NgForm;

  ingredientSubscription: Subscription;
  editMode = false;
  currentItemIndex: number;
  currentIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{ ingredients: Ingredient[] }>) { }

  ngOnInit() {
    this.ingredientSubscription = this.shoppingListService.ingredientEdited.subscribe(
      (index) => {
        this.editMode = true;
        this.currentItemIndex = index;
        this.currentIngredient = this.shoppingListService.getIngredient(index);

        this.form.setValue({
          name: this.currentIngredient.name,
          amount: this.currentIngredient.amount
        })
    });
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }

  onFormSubmit() {
    const { name, amount } = this.form.value;
    const ingredient = new Ingredient(name, amount);

    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.currentItemIndex, ingredient);
    } else {
      // this.shoppingListService.addIngredient(ingredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }

    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.form.reset();
  }

  onCancel() {
    this.clearForm();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.currentItemIndex);
    this.clearForm(); 
  }

}
