import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import { ShoppingListState } from 'src/app/shopping-list/store/shopping-list.reducers';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  id!: number;

  constructor(
    private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<ShoppingListState>,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // tslint:disable-next-line:no-string-literal
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
