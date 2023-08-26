import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



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

  constructor(private snackBar: MatSnackBar, private router: Router) {}
  
  openSnackBar(message: string, success: boolean) {
    const config: MatSnackBarConfig = {
      duration: 100000, // Display for 5 seconds
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: success ? 'success-snackbar' : 'error-snackbar'
    };
    this.snackBar.open(message, 'Close', config);
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
      this.openSnackBar('Login successful!', true);
      this.router.navigate(['/dashboard']); // Redirect to success page
      localStorage.setItem('loggedInStatus', 'true');

    } else {
      //alert('Login failed. Please check your credentials.');
      this.openSnackBar('Login failed. Please check your credentials.', false);
    }
  }
  
}
