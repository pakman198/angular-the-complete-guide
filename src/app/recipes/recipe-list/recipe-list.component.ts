import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipesSubscription: Subscription

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.recipesSubscription = this.store.select('recipes').pipe(
      map(recipesState => recipesState.recipes)
    ).subscribe(recipes => this.recipes = recipes);
    
  }

  ngOnDestroy() {
    this.recipesSubscription.unsubscribe();
  }

}
