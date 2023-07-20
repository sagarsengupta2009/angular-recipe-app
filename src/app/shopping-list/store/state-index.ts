import { ActionReducerMap } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListState,  shoppingListReducer } from "./shopping-list.reducers";

export const rootReducer = {};

export interface AppState {
    shoppingList: ShoppingListState;
};

export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: shoppingListReducer
};