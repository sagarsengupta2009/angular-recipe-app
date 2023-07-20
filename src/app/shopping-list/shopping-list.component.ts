import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListState } from './store/shopping-list.reducers';
// import { AppState } from './store/state-index';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingListState!: Observable<ShoppingListState>;
  subscription!: Subscription;

  constructor( 
    private shoppingListService: ShoppingListService,
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {
      // this.shoppingListState = store.select('shoppingList');
   }

  ngOnInit() {
    console.log('init')
    // this.shoppingListState = this.store.pipe(select('shoppingList'));
    this.shoppingListState = this.store.select('shoppingList');
    this.shoppingListState.subscribe(item => console.log(item))
    // this.subscription = this.shoppingListService.ingridientsChanged
    // .subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

