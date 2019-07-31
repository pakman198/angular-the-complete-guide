import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: false}) form: NgForm;

  editMode = false;
  currentIngredient: Ingredient;

  constructor(private store: Store<fromApp.AppState>) { }

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
      this.store.dispatch( new ShoppingListActions.UpdateIngredient(ingredient) );
    } else {
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
    this.store.dispatch( new ShoppingListActions.DeleteIngredient());
    this.clearForm(); 
  }

}
