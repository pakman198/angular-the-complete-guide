import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipes.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeIndex: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeIndex = +params.id;

      this.store.select('recipes').pipe( 
        map(recipesState => {

          return recipesState.recipes.find((recipe, index) => {
            return index === this.recipeIndex;
          });
        })
      ).subscribe( recipe => {
        this.recipe = recipe;
      });
      
    });
  }

  onAddToShoppingList() {
    this.store.dispatch( new ShoppingListActions.AddIngredients(this.recipe.ingredients) )
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.recipeIndex);
    this.store.dispatch( new RecipesActions.DeleteRecipe(this.recipeIndex) );
    this.router.navigate(['/recipes']);
  }

}
