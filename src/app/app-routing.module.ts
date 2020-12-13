import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { HeroComponent } from './components/hero/hero.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { NewEmployeesComponent } from './components/new-employees/new-employees.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HeroComponent
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
  {
    path: "not-found",
    component: NotFoundComponentComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
