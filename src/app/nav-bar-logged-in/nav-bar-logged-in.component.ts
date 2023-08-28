import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'; // Import the AppComponent


@Component({
  selector: 'app-navbar-logged-in',
  templateUrl: './nav-bar-logged-in.component.html',
  styleUrls: ['./nav-bar-logged-in.component.scss']
})
export class NavBarLoggedInComponent implements OnInit {
  loggedInUserName: string = ''; // Option 1

  constructor(private router: Router, private appComponent: AppComponent) {}

  ngOnInit() {
    const loggedInUserString = localStorage.getItem('loggedInUser');
  
    if (loggedInUserString !== null) {
      const loggedInUser = JSON.parse(loggedInUserString);
      if (loggedInUser) {
        this.loggedInUserName = loggedInUser.username;
      }
    }
  }
  
  logout() {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInStatus');
    this.appComponent.updateLoggedInStatus(); // Notify AppComponent of logout change
    this.router.navigate(['/login']);
  }
}
