import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private data: DataService
  ) {
    this.employees = [];
  }

  ngOnInit(): void {
    this.makeRequest()
  }

  public makeRequest(){
    this.data.makeRequest('http://dummy.restapiexample.com/api/v1/employees')
    .then((res) => {
      if(res.status == 'success'){
        this.employees = res.data;
      }
    })
  }
  public employees: any[] = [];
}
