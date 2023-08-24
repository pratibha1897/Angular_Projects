import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {} // Inject the Router

  
  onSubmit() {
    // Retrieve existing users from localStorage
    const storedUsers: any[] = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Check if provided username and password match any user
    const matchedUser = storedUsers.find((storedUser: any) =>
      storedUser.username === this.loginData.username && storedUser.password === this.loginData.password
    );
  
    if (matchedUser) {
      // Successful login
      this.router.navigate(['/success']); // Redirect to success page
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
  
}
