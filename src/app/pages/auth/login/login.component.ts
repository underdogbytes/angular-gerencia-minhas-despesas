import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
      console.log("Falso login efetuado! \nDados:", this.authForm.value);
    }
  }
}
