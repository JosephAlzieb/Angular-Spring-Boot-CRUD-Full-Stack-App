import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService as EmployeeService } from '../../services/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,                     // <-- WICHTIG
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})

export class EmployeeList implements OnInit {
  employees: Employee[] = [];
  
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number): void {
    this.employeeservice.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(emp => emp.id !== id);
    }); 
  }
}
