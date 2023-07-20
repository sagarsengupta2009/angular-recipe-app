import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req)

        const copiedReq = req.clone({
            params: req.params.set('auth', this.authService.getToken())
        })

        return next.handle(copiedReq);
    }
}