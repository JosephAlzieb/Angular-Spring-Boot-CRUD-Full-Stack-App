import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmloyeeService as EmployeeService } from '../../services/emloyee-service';

@Component({
  selector: 'app-employee-list',
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
