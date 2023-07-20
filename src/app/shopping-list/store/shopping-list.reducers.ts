import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface ShoppingListState {
    ingredients: Ingredient[];
}

const initialState: ShoppingListState =  {
    ingredients: [ 
        new Ingredient("Eggs", 100),
        new Ingredient("Apples", 100),
        new Ingredient("Tomatoes", 50),
        new Ingredient("Breads", 50)
    ]
}

export function shoppingListReducer(state: ShoppingListState = initialState, 
    action: ShoppingListActions.ShoppingListActions) {

    switch (action.type) {

        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[action.payload.index] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(action.payload, 1);
            return {
                ...state,
                ingredients: oldIngredients
            }
        default:
            return state;
    }
    
}