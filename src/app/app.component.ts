import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  loggedInUsername = '';
  //title = 'pratibha';
 // func(){
 //   const name = "Ravi";
   // return name;
  //}
  constructor(private cdRef: ChangeDetectorRef) {
    const loggedInStatus = localStorage.getItem('loggedInStatus');
    this.isLoggedIn = loggedInStatus === 'true';
  }
  
  updateLoggedInStatus() {
    const loggedInStatus = localStorage.getItem('loggedInStatus');
    this.isLoggedIn = loggedInStatus === 'true';
    this.cdRef.detectChanges();
  } 

}
