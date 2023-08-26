import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false; // Initialize as not logged in

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Check login status here and update loggedIn
    const storedUser = localStorage.getItem('loggedInUser');
    this.loggedIn = !!storedUser;
    this.cdRef.detectChanges(); // Trigger change detection
}

  logout(): void {
    // Implement logout logic here (clear user data, reset loggedIn, etc.)
    localStorage.removeItem('loggedInUser');
    this.loggedIn = false; // Update login status
    this.router.navigate(['/login']); // Redirect to login after logout
  }
}