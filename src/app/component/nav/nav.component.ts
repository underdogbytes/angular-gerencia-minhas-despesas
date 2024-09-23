import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ButtonComponent, NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class HeaderComponent {
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
}
