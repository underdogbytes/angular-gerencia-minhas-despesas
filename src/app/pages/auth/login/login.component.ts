import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../../component/button/button.component";
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navigationService: NavigationService
  ) {
    this.authForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['', Validators.required]
    })
  }

  login() {
    // TODO: fazer API ao invés de fazer falso login usando sessionStorage ^-^
    if (this.authForm.valid) {
      sessionStorage.setItem('logged', 'true');
      sessionStorage.setItem('user', this.authForm.value.email)
      this.navigationService.mudarRota('home');
    } else {
      // TODO: exibir erro na tela em caso de erro
      console.log("Formulário inválido!", this.authForm.errors);
    }
  }
}
