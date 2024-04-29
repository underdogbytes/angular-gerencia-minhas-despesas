import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../../component/button/button.component";

@Component({
  selector: 'expenses',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './expenses.component.html',
  styleUrl: 'expenses.component.css'
})
export class ExpensesComponent {
  saude = 'Despesas de Saúde';


  expenses = [
    {
      id: 1,
      name: 'Saúde',
      path: 'saude'
    },
    {
      id: 2,
      name: 'Reforma da Casa',
      path: 'saude'
    }
  ]
}