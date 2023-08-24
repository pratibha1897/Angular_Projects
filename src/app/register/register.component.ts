import { Component } from '@angular/core';

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
    password: ''
  };

  onSubmit() {
    // Retrieve existing users from localStorage
    const storedUsers: any[] = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Check if username or email is already taken
    const duplicateUser = storedUsers.find((storedUser: any) =>
      storedUser.username === this.user.username || storedUser.email === this.user.email
    );
  
    if (duplicateUser) {
      alert('Username or email already exists. Please choose different credentials.');
      return;
    }
  
    // If no duplicates found, add new user and update localStorage
    storedUsers.push(this.user);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Registration successful!');
    this.user = {
      username: '',
      mobile: '',
      email: '',
      password: ''
    };    
  }
  
  }

