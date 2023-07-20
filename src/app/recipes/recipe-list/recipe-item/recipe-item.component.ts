import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe!: Recipe;
    @Input() index!: number;

    constructor() {};
    
    ngOnInit(): void {
        
    }
}