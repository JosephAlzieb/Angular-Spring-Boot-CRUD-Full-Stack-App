import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-update',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-update.html',
  styleUrl: './employee-update.css'
})
export class EmployeeUpdate {

  employeeForm!: FormGroup;
  employeeId!: number;

constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // ID aus URL holen
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

    // Formular initialisieren
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]]
    });

    // Daten für Employee laden
    this.employeeService.getEmployeesById(this.employeeId).subscribe(emp => {
      this.employeeForm.patchValue(emp); // Füllt Felder mit Daten
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const updatedEmployee: Employee = { id: this.employeeId, ...this.employeeForm.value };

      this.employeeService.updateEmployee(this.employeeId, updatedEmployee).subscribe(() => {
        console.log('Employee updated');
        this.router.navigate(['/employees']); // zurück zur Liste
      });
    }
  }

}
