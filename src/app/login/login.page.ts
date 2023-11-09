import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login(event: Event) {
    // Aquí debes implementar la lógica de autenticación.
    // Puedes usar servicios, Firebase, etc.
    // Por ahora, simplemente redirigiré a la página principal.
    this.router.navigate(['/home']);
    event.preventDefault();
  }
  registro(event: Event) {
    // Aquí debes implementar la lógica de autenticación.
    // Puedes usar servicios, Firebase, etc.
    // Por ahora, simplemente redirigiré a la página principal.
    this.router.navigate(['/registro']);
    event.preventDefault();
  }
}

