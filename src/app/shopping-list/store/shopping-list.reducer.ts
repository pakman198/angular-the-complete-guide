import { Action } from '@ngrx/store';

import { Ingredient } from "../../shared/ingredient.model";
import  * as ShoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients: [
        new Ingredient('Tomatoes', 3),
        new Ingredient('Celery', 1)
    ],
    selectedIngredient: null,
    selectedIngredientIndex: -1 
}

function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
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
            const { index } = action.payload;
            const ingredient = state.ingredients[index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            const ingredients =[...state.ingredients];
            ingredients[index] = updatedIngredient;

            return {
                ...state,
                ingredients
            }

        case ShoppingListActions.DELETE_INGREDIENT:
            const newList = state.ingredients.filter( (ig, index) => index !== action.payload )
            
            return {
                ...state,
                ingredients: newList
            }
        default:
            return state;
    }
}

export default shoppingListReducer;