import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { AuthenticationService } from "../authentication/authentication.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: 'root',
  })

export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthenticationService) {}
    
    storeRecipes() {
        const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization', 'Bearer asfjabdlaf');
        const params = new HttpParams().set('auth', token);
        
        // return this.http.put('https://sagar-s-recipe-book-default-rtdb.firebaseio.com/recipes.json', 
        // this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     // headers: headers
        //     params: params
        // });

        const req = new HttpRequest('PUT', 'https://sagar-s-recipe-book-default-rtdb.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes(), {
            reportProgress: true,
            // params: params
        })
        return this.http.request(req);
    }

    getRecipes() {
        const token = this.authService.getToken();

        // return this.http.get<Recipe[]>('https://sagar-s-recipe-book-default-rtdb.firebaseio.com/recipes.json?auth=' + token)
        return this.http.get('https://sagar-s-recipe-book-default-rtdb.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        })
        .pipe(map(
            (recipes) => {
                console.log(recipes);
                // for(let recipe of recipes) {              
                //     if(!recipe['ingredients']) {
                //         console.log(recipe);
                //         recipe['ingredients'] = [];
                //     }
                // }
                // return recipes;
                    return []; 
                }
            ))
            .subscribe(
                (response: any) => {
                    const recipes: Recipe[] = response;
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}