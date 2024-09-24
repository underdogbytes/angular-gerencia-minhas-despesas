import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ButtonComponent, NgFor, NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService) {
  }

  isUserLogged = this.authService.isLogged();
  
  items = [
    {
      name: 'Home',
      route: ''
    },
    {
      name: 'Sobre nós',
      route: 'sobre'
    }
  ]
  
  logout() {
    this.authService.logout();
  }
}
