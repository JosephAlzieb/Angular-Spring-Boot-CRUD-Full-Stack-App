import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css'
})
export class EmployeeCreate implements OnInit {
  employeeForm!: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private routes: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(data => {
      console.log('Employee created successfully:', data);
      this.goToEmployeeList();
      });
    } else {
      console.log("Form ist ungültig");
    }
  }


  goToEmployeeList(){
    this.routes.navigate(['/employees']);
  }

}
