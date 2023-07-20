import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: 'root',
  })

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isAuthenticated();
    }

}