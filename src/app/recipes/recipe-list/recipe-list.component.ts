import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Lemon Pepper Chicken', 
      'Chicken breast baked with lemon and pepper', 
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504195270-lemon-pepper-chicken.jpg'
    ),
    new Recipe(
      'Lemon Pepper Chicken', 
      'Chicken breast baked with lemon and pepper', 
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504195270-lemon-pepper-chicken.jpg'
    ),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectedRecipeHandler(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
