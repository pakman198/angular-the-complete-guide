import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipes.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  index: number;
  isEditMode = false;
  recipeForm: FormGroup;

  private storeSubscription: Subscription

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  get ingredientsControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.route)
      console.log(params.id)
      this.index = +params.id;
      this.isEditMode = params.id !== undefined;
      this.initForm();
    });
  }

  ngOnDestroy() {
    if(this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    console.log('this.isEditMode', this.isEditMode)

    if(this.isEditMode) {
      // const recipe = this.recipeService.getRecipe(this.index);
      this.storeSubscription = this.store.select('recipes').pipe(
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.index;
          });
        })
      ).subscribe(recipe => {
        recipeName = recipe.name;
        recipeDescription = recipe.description;
        recipeImagePath = recipe.imagePath; 

        if(recipe.ingredients.length !== 0) {
          recipe.ingredients.forEach(ingredient => {
            recipeIngredients.push( new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            }))
          })
        }
      });
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
    const { name, description, imagePath, ingredients } = this.recipeForm.value;
    const newRecipe = new Recipe(
      name,
      description,
      imagePath,
      ingredients
    );

    if(this.isEditMode) {
      this.store.dispatch( new RecipesActions.UpdateRecipe({index: this.index, recipe: newRecipe}) );
    } else {
      this.store.dispatch( new RecipesActions.AddRecipe(newRecipe));
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push( new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

}
