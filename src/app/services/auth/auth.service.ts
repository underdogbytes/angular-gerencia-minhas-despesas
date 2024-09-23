import { Injectable } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private navigationService: NavigationService
  ) { }

  // TODO: fazer API ao invés de fazer falso login usando sessionStorage ^-^
  login(user: string) {
    sessionStorage.setItem('logged', 'true');
    sessionStorage.setItem('user', user);
    this.navigationService.mudarRota('home');
  }
  logout() {
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('user');
  }
}
