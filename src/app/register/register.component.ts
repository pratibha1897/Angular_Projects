import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    username: '',
    mobile: '',
    email: '',
    password: '',
    role: '',
    schoolName: '', 
    organizationName: '',
  };

  onMobileInput(event: any) {
    const input = event.target;
    const value = input.value;

    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');

    // Update the input value with the filtered numeric value
    input.value = numericValue;

    // Update the user's mobile number in the model
    this.user.mobile = numericValue;
  }


  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, success: boolean) {
    const config: MatSnackBarConfig = {
      duration: 5000, // Display for 5 seconds
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: success ? 'success-snackbar' : 'error-snackbar'
    };
    this.snackBar.open(message, 'Close', config);
  }
  
  onlyTenDigits(value: string): boolean {
    return value.length > 10 || (value.length > 0 && value.length < 10);
  }

  hasSpaces(value: string): boolean {
    return value.includes(' ');
  }

  @Output() registered = new EventEmitter<void>();

  onSubmit() {
    // Retrieve existing users from localStorage
    const storedUsers: any[] = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Check if username or email is already taken
    const duplicateUser = storedUsers.find((storedUser: any) =>
      storedUser.username === this.user.username || storedUser.email === this.user.email
    );
  
    if (duplicateUser) {
      alert('Username or email already exists. Please choose different credentials.');
      // this.snackBar.open('Username or email already exists. Please choose different credentials.', 'Dismiss', {
      //   panelClass: ['error-snackbar']
      // });
      return;
    }
  
    // If no duplicates found, add new user and update localStorage
    storedUsers.push(this.user);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    //alert('Registration successful!');
    this.openSnackBar('Successfully registered!', true);

    this.registered.emit();
    this.user = {
      username: '',
      mobile: '',
      email: '',
      password: '',
      role: '',
      schoolName: '',
      organizationName: '',
    };    
  }
  }

