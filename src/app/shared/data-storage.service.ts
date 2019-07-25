import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  baseUrl = 'https://angular-the-complete-gui-28c38.firebaseio.com';

  constructor(
    private http: HttpClient, 
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.baseUrl}/recipes.json`, recipes)
    .subscribe(response => console.log({response}));
  }

  fetchRecipes() {
    
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes.json?`).pipe(
      map(recipes => {
        // the purpose of this is to check if the recipe has ingredients
        // otherwise we transform the data 
        return  recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        })
      }),
      tap(recipes => {
        // tap operator lets you do something with the reponse
        // without modifying it, it's just some 
        this.recipeService.setRecipes(recipes)
      })
    );
  }
}
