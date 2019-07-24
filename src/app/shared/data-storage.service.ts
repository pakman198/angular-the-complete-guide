import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  baseUrl = 'https://angular-the-complete-gui-28c38.firebaseio.com';

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.baseUrl}/recipes.json`, recipes)
    .subscribe(response => console.log({response}));
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(`${this.baseUrl}/recipes.json`)
    .subscribe(recipes => {
      console.log({recipes});
      this.recipeService.setRecipes(recipes); 
    })
  }
}
