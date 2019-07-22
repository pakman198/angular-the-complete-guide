import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.url.subscribe(segments => {
      segments.forEach(segment => {
        console.log({segment})
        if(segment.path === 'edit') {
          this.isEditMode = true;
        }
      })
    });

    this.route.params.subscribe(params => {
      console.log(this.route)
      this.id = +params.id;
      // this.isEditMode = params.edit != null
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    console.log('this.isEditMode', this.isEditMode)

    if(this.isEditMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath; 

      if(recipe.ingredients.length !== 0) {
        recipe.ingredients.forEach(ingredient => {
          recipeIngredients.push( new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }))
        })
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(recipeImagePath),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push( new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl()
    }))
  }

}
