import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isUserLogged: string | null = null;

  ngOnInit() {
    if (typeof sessionStorage !== 'undefined') {
      this.isUserLogged = sessionStorage.getItem('logged');
    }
  }
}
