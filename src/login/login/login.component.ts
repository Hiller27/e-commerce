import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordVisible: boolean = false;
  username: string = '';
  password: string = '';
  email: string = '';
  confirmPassword: string = '';
  fakeUsername: string = '1193555111';
  fakePassword: string = 'Test123*';
  loginMessage: string = '';
  registerMessage: string = '';
  showLoginForm: boolean = true;

  constructor(private router: Router) {}

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
    this.loginMessage = '';
    this.registerMessage = '';
  }

  login() {
    if (this.username === this.fakeUsername && this.password === this.fakePassword) {
      this.loginMessage = 'Inicio de sesión exitoso';

      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);

    } else {
      this.loginMessage = 'Usuario o contraseña incorrectos';
      setTimeout(() => {
        this.loginMessage = '';
      }, 3000);
    }
  }

  register() {
    if (this.password === this.confirmPassword) {
      this.registerMessage = 'Registro exitoso';
      setTimeout(() => {
        this.toggleForm(); // Cambiar al formulario de inicio de sesión después del registro
      }, 1000);
    } else {
      this.registerMessage = 'Las contraseñas no coinciden';
      setTimeout(() => {
        this.registerMessage = '';
      }, 3000);
    }
  }
}