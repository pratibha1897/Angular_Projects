import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppComponent } from '../app.component'; // Import the AppComponent


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

  

  @Output() loggedIn = new EventEmitter<{ user_name: string }>();

  constructor(private snackBar1: MatSnackBar, private router: Router, private appComponent: AppComponent) {}
  
  openSnackBar1(message: string, success: boolean) {
    const config: MatSnackBarConfig = {
      // duration: 5000, // Display for 5 seconds
      // verticalPosition: 'top',
      // horizontalPosition: 'end',
      // panelClass: success ? ['success-snackbar'] : ['error-snackbar']
    };
    this.snackBar1.open(message, 'Close', {
      duration: 5000, // Display for 5 seconds
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: success ? ['success-snackbar1'] : ['error-snackbar1']
    });
  }
  
  
  onSubmit() {
    //alert('onSubmit() method called');

    // Retrieve existing users from localStorage
    const storedUsers: any[] = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Check if provided username and password match any user
    const matchedUser = storedUsers.find((storedUser: any) =>
      storedUser.username === this.loginData.username && storedUser.password === this.loginData.password
    );
  
    if (matchedUser) {
      // Successful login
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser)); // Store user data
      this.openSnackBar1('Login successful!', true);
      this.router.navigate(['/dashboard']); // Redirect to success page
      localStorage.setItem('loggedInStatus', 'true');
      this.appComponent.updateLoggedInStatus(); // Notify AppComponent of login change

    } else {
      //alert('Login failed. Please check your credentials.');
      this.openSnackBar1('Login failed. Please check your credentials.', false);
    }
  }
  
}
