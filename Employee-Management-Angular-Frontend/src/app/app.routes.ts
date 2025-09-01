import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeCreate } from './components/employee-create/employee-create';
import { EmployeeUpdate } from './components/employee-update/employee-update';
import { EmployeeDetail } from './components/employee-detail/employee-detail';

export const routes: Routes = [
    { path: 'employees', component: EmployeeList },
    { path: 'create', component: EmployeeCreate },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'update/:id', component: EmployeeUpdate, title: 'Update Employee', 
        data: { renderMode: 'client' }

    },
    { path: 'details/:id', component: EmployeeDetail, title: 'Employee Details',
        data: { renderMode: 'client' }

    },
];
