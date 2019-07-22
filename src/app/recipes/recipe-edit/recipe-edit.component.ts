import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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
    let recipeIngredients;

    console.log('this.isEditMode', this.isEditMode)

    if(this.isEditMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath; 
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(recipeImagePath)
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

}
