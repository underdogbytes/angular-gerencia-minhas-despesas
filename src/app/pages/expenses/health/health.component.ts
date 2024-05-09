import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'health',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './health.component.html',
  styleUrl: 'health.component.css'
})
export class HealthExpensesComponent {

  healthExpenses = [
    {
      id: 1,
      name: 'Dentista'
    }
  ]
}