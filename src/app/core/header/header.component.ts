import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();
    
    constructor(private dataStorageService: DataStorageService,
        public authService: AuthenticationService) {}

    onSelect(feature: string){
        this .featureSelected.emit(feature);
    }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: any) => {
                console.log(response);
            },
            (error: any) => {}
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}