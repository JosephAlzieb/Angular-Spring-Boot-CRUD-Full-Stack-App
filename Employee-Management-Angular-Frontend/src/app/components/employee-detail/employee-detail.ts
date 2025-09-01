import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css'
})
export class EmployeeDetail implements OnInit {
    employee!: Employee;

    constructor(
      private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // ID aus URL holen
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loadEmployee(id);
      }
    });
  }

  private loadEmployee(id: number): void {
    this.employeeService.getEmployeesById(id).subscribe({
      next: (data) => this.employee = data,
      error: (err) => console.error('Error loading employee:', err)
    });
  }


  goBack(): void {
    this.router.navigate(['/employees']);
  }

}
