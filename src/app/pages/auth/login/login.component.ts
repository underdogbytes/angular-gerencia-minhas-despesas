import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../../component/button/button.component";
import { AuthService } from './../../../services/auth/auth.service';

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
    private authService: AuthService
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
    if (this.authForm.valid) {
      this.authService.login(this.authForm.value.email);
    } else {
      // TODO: exibir erro na tela em caso de erro
      console.log("Formulário inválido!", this.authForm.errors);
    }
  }
}
