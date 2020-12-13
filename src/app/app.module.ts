import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { HeroComponent } from './components/hero/hero.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NewEmployeesComponent,
    DetailEmployeeComponent,
    AdminComponent,
    Chart1Component,
    PaginationPipe,
    HeroComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
