import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable()

export class LoggingInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(tap(
            (event) => {
                console.log(event)
            }
        ));
    }
}