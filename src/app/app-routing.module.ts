import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { NewEmployeesComponent } from './components/new-employees/new-employees.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  },
  {
    path: "employees",
    component: ListEmployeesComponent
  },
  {
    path: "new-employee",
    component: NewEmployeesComponent
  },
  {
    path: "employee/:userid",
    component: DetailEmployeeComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
