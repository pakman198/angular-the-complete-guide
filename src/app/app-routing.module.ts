import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';

const appRoutes: Routes = [
 { path: 'recipes', component: RecipesComponent, children: [
     {path: '', component: RecipeStartComponent },
     {path: 'new', component: RecipeEditComponent },
     // dynamic routes should come at the end, otherwise
    //  a problem like trying to fetch data using "new" could occur
     {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] },
     {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] },
 ]},
 { path: 'shopping-list', component: ShoppingListComponent },
 { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}