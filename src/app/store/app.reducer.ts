import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingListReducer from '../shopping-list/store/shopping-list.reducer';
import * as fromAuthReducer from '../auth/store/auth.reducer';
import * as fromRecipesReducer from '../recipes/store/recipes.reducer';

export interface AppState {
    shoppingList: fromShoppingListReducer.State;
    auth: fromAuthReducer.State;
    recipes: fromRecipesReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingListReducer.shoppingListReducer,
    auth: fromAuthReducer.AuthReducer,
    recipes: fromRecipesReducer.recipeReducer
} 