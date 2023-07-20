import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAjO4C_x0UM8BeBEauKRxVnrWUqRqNf-3I",
      authDomain: "sagar-s-recipe-book.firebaseapp.com",
    });
  }
  
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
