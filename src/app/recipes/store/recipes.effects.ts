import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RecipesActions from './recipes.actions';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';

const baseUrl = 'https://angular-the-complete-gui-28c38.firebaseio.com';

@Injectable()
export class RecipesEffects {
    @Effect()
    fetchRecipes = this.actions$.pipe(
        ofType(RecipesActions.FETCH_RECIPES),
        switchMap(() => {
            return this.http.get<Recipe[]>(`${baseUrl}/recipes.json?`)
        }),
        map(recipes => {
            return  recipes.map(recipe => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              }
            })
        }),
        map(recipes => {
            return new RecipesActions.SetRecipes(recipes);
        })
    )

    @Effect({ dispatch: false })
    storeRecipes = this.actions$.pipe( 
        ofType(RecipesActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
            // const recipes = this.recipeService.getRecipes();
            return this.http.put(`${baseUrl}/recipes.json`, recipesState.recipes);
        })
    );

    constructor(private actions$: Actions, 
        private http: HttpClient, 
        private store: Store<fromApp.AppState>){ }
}