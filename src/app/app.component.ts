import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;
  loggedInUsername = '';
  title = 'pratibha';
  func(){
    const name = "Ravi";
    return name;
  }

  onLoggedIn(user: { user_name: string }) {
    this.isLoggedIn = true;
    this.loggedInUsername = user.user_name; // Extract the username from the event object
  }
  
}
