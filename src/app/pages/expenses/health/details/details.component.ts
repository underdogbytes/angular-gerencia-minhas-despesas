import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: 'details.component.css'
})

export class HealthExpensesDetailsComponent implements OnInit {

  client = {
    id: '0',
    name: '',
    description: ''
  }

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.client = {
        id: id,
        name: "Despesa",
        description: 'Descrição teste'
      }
    }
  }
}