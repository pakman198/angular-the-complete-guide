import { Action } from '@ngrx/store';

import { Ingredient } from "../../shared/ingredient.model";
import  * as ShoppingListActions from './shopping-list.actions';

const initialState: State = {
    ingredients: [
        new Ingredient('Tomatoes', 3),
        new Ingredient('Celery', 1)
    ],
    selectedIngredient: null,
    selectedIngredientIndex: -1 
}

export interface State {
    ingredients: Ingredient[],
    selectedIngredient: Ingredient,
    selectedIngredientIndex: number
}


export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload
                ]
            }

        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    ...action.payload
                ]
            }

        case ShoppingListActions.UPDATE_INGREDIENT:
            const index  = state.selectedIngredientIndex;
            const ingredient = state.ingredients[index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            }
            const ingredients =[...state.ingredients];
            ingredients[index] = updatedIngredient;

            return {
                ...state,
                ingredients,
                selectedIngredient: null,
                selectedIngredientIndex: -1
            }

        case ShoppingListActions.DELETE_INGREDIENT:
            const newList = state.ingredients.filter( (ig, index) => index !== state.selectedIngredientIndex )
            
            return {
                ...state,
                ingredients: newList,
                selectedIngredient: null,
                selectedIngredientIndex: -1
            }

        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                selectedIngredientIndex: action.payload,
                selectedIngredient: { ...state.ingredients[action.payload] }
            }

        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                selectedIngredient: null,
                selectedIngredientIndex: -1
            }

        default:
            return state;
    }
}
