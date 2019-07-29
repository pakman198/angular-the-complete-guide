import { Action } from '@ngrx/store';

import { Ingredient } from "../../shared/ingredient.model";
import  * as ShoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients: [
        new Ingredient('Tomatoes', 3),
        new Ingredient('Celery', 1)
    ]
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
        default:
            return state;
    }
}

export default shoppingListReducer;