import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { AppState } from '../../app.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: false}) form: NgForm;

  editMode = false;
  currentIngredient: Ingredient;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.selectedIngredientIndex !== -1) {
        this.editMode = true;
        this.currentIngredient = stateData.selectedIngredient;

        this.form.setValue({
          name: this.currentIngredient.name,
          amount: this.currentIngredient.amount
        });

      } else {
        this.editMode = false;
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onFormSubmit() {
    const { name, amount } = this.form.value;
    const ingredient = new Ingredient(name, amount);

    if(this.editMode) {
      // this.shoppingListService.updateIngredient(this.currentItemIndex, ingredient);
      this.store.dispatch( new ShoppingListActions.UpdateIngredient(ingredient) );
    } else {
      // this.shoppingListService.addIngredient(ingredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }

    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.form.reset();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onCancel() {
    this.clearForm();
  }

  onDelete() {
    // this.shoppingListService.deleteIngredient(this.currentItemIndex);
    this.store.dispatch( new ShoppingListActions.DeleteIngredient());
    this.clearForm(); 
  }

}
