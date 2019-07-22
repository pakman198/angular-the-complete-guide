import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipesSubscription: Subscription

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipesUpdated.subscribe(recipes => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

}
