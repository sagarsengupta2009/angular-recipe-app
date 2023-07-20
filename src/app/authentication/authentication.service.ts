import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
    providedIn: 'root',
  })

export class AuthenticationService {

    tokenId!: any;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                (error: any) => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response: any) => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser?.getIdToken().then(
                        (token: String) => {
                            this.tokenId = token
                        }
                    )
                }
            )
            .catch(
                (error: any) => console.log(error)
            )
    }

    getToken() {
        firebase.auth().currentUser?.getIdToken().then(
            (token: String) => {
                this.tokenId = token
            }
        )
        return this.tokenId;
    }

    isAuthenticated() {
        return this.tokenId != null;
    }

    logout() {
        firebase.auth().signOut();
        this.tokenId = null;
    }
}