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
  styleUrl: './login.component.css',
})
export class LoginComponent {
  passwordVisible: boolean = false;
  username: string = '';
  password: string = '';
  email: string = '';
  confirmPassword: string = '';
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

    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (this.username === user.username && this.password === user.password) {

        sessionStorage.setItem('isLoggedIn', 'true');

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      } else {
        this.loginMessage = 'Usuario o contraseña incorrectos';
        setTimeout(() => {
          this.loginMessage = '';
        }, 3000);
      }
    } else {
      this.loginMessage = 'Usuario no registrado';
      setTimeout(() => {
        this.loginMessage = '';
      }, 3000);
    }
  }


// Método para validar el formato del correo electrónico
validateEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Método para registrar un nuevo usuario
register() {
  if (!this.username || !this.email || !this.password || !this.confirmPassword) {
    this.registerMessage = 'Todos los campos son obligatorios';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  if (this.password !== this.confirmPassword) {
    this.registerMessage = 'Las contraseñas no coinciden';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  if (!this.validateEmail(this.email)) {
    this.registerMessage = 'El correo electrónico no tiene un formato válido';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  if (this.password.length < 8) {
    this.registerMessage = 'La contraseña debe tener al menos 8 caracteres';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  if (!/[A-Z]/.test(this.password)) {
    this.registerMessage = 'La contraseña debe incluir al menos una letra mayúscula';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  if (!/[a-z]/.test(this.password)) {
    this.registerMessage = 'La contraseña debe incluir al menos una letra minúscula';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  if (!/\d/.test(this.password)) {
    this.registerMessage = 'La contraseña debe incluir al menos un número';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  if (!/[@$!%*?&]/.test(this.password)) {
    this.registerMessage = 'La contraseña debe incluir al menos un carácter especial (@$!%*?&)';
    setTimeout(() => {
      this.registerMessage = '';
    }, 3000);
    return;
  }

  const user = {
    username: this.username,
    email: this.email,
    password: this.password,
  };

  // Almacenar el objeto en localStorage
  localStorage.setItem('user', JSON.stringify(user));

  this.registerMessage = 'Registro exitoso';
  setTimeout(() => {
    this.toggleForm();
  }, 1000);
}
}
