import { Component } from '@angular/core';
import { ButtonComponent } from "../../component/button/button.component";
import { NavigationService } from './../../services/navigation/navigation.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private navigationService: NavigationService) { }
  
  irPara(rota: string) {
    this.navigationService.mudarRota(rota)
  }
}
