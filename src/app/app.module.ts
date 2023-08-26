import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SuccessComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavBarLoggedOutComponent } from './nav-bar-logged-out/nav-bar-logged-out.component';
import { NavBarLoggedInComponent } from './nav-bar-logged-in/nav-bar-logged-in.component'; // Import MatSnackBarModule

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: SuccessComponent },
  { path: '**', redirectTo: 'register' } // Handle unknown routes
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SuccessComponent,
    NavbarComponent,
    NavBarLoggedOutComponent,
    NavBarLoggedInComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
