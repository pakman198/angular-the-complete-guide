import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddedIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const name = this.nameInputRef.nativeElement.value;
    const qty = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, qty);

    this.onAddedIngredient.emit(ingredient);
  }

}
