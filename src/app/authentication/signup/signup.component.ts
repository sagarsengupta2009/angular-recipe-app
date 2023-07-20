import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
  })

export class SignupComponent implements OnInit {
    constructor(private authService: AuthenticationService) {}

    ngOnInit() {
        
    }

    onSignup(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signupUser(email, password);
    }
}