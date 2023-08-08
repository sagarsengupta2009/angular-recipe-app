import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../state-index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthenticationService,
    private store: Store<fromApp.AppState>
  ) {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
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
