import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  styleUrls: ['./new-employees.component.css']
})
export class NewEmployeesComponent implements OnInit {

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {

  }

  public alertMessage = '';

  public newEmployeeData = {
    name: '',
    age: '',
    salary: '',
  };

  public formSubmit() {

    if(
      !this.newEmployeeData.name ||
      !this.newEmployeeData.age ||
      !this.newEmployeeData.salary
    ) {
      return this.alertMessage = 'All fields are required.';
    } else {
      this.createEmployee();
    }
  }

  private createEmployee() {

    let  requestObject = {
      type: 'POST',
      location: 'create',
      body: this.newEmployeeData
    }

    this.data.makeRequest(requestObject)
    .then(()=>{
      this.alertMessage=`${this.newEmployeeData.name} has been created`;
    });
  }
}
