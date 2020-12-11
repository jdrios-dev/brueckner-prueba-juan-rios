import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { NewEmployeesComponent } from './components/new-employees/new-employees.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { Chart1Component } from './components/chart1/chart1.component';
import { PaginationPipe } from './pipes/pagination.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NewEmployeesComponent,
    DetailEmployeeComponent,
    AdminComponent,
    Chart1Component,
    PaginationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
