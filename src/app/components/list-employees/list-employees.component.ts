import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {


  constructor(
    private data: DataService
  ) {}

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
  public employees: [] = [];
  public pageSize: number = 10;
  public pageNumber: number = 1;
  public pageSizeOptions = [5, 10, 15];
  public handlePage(e) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex+1;
  }
}
