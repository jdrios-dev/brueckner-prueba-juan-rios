import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(
    private data: DataService
  ) {this.employees = [];}

  ngOnInit(): void {

    let requestObject = {
      type: 'GET',
      location: 'employees'
    };

    this.data.makeRequest(requestObject).then((res) => {
      if(res.status == 'success'){
        this.employees = res.data;
      }
    });
  }
  public employees: any[] = [];
}
