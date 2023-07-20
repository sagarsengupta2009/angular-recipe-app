import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
  })

export class SigninComponent implements OnInit {
    constructor(private authService: AuthenticationService) {}

    ngOnInit() {
        console.log('signin called')
    }

    onSignin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signinUser(email, password);
    }
}