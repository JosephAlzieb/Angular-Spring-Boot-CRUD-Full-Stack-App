import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeCreate } from './components/employee-create/employee-create';
import { EmployeeUpdate } from './components/employee-update/employee-update';

export const routes: Routes = [
    { path: 'employees', component: EmployeeList },
    { path: 'create', component: EmployeeCreate },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'update-employee/:id', component: EmployeeUpdate },


];
