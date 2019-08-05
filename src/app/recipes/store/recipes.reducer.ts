import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipes.actions';

export interface State {
    recipes: Recipe[]
}

const initialState: State = {
    recipes: []
}

export function recipeReducer(state = initialState, action: RecipesActions.RecipesActions) {
    switch(action.type) {
        case RecipesActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            }

        case RecipesActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }

        case RecipesActions.UPDATE_RECIPE:
            const newList = [...state.recipes ];
            newList[action.payload.index] = action.payload.recipe;

            return {
                ...state,
                recipes: newList
            }

        case RecipesActions.DELETE_RECIPE:
            const updatedList = state.recipes.filter((recipe, index) => index !== action.payload);

            return {
                ...state,
                recipes: updatedList 
            }
        default:
            return state;
    }
}