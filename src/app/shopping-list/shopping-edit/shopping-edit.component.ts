import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

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

  constructor(private shoppingListService: ShoppingListService) { }

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
      this.shoppingListService.addIngredient(ingredient);
    }

    this.editMode = false;
    this.form.reset();

  }

}
