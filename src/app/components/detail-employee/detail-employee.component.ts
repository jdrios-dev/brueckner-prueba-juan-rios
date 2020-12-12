import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe ( params => {
      this.paramId = params.userid;
    });
    let objectRequest = {
      type: 'GET',
      location: `employee/${this.paramId}`
    }

    this.data.makeRequest(objectRequest).then((res) => {
      if(res.status == 'success'){
        this.name = res.data.employee_name;
        this.salary = res.data.employee_salary;
        this.age = res.data.employee_age;
        this.image = res.data.employee_image;
        this.loading = false;
      }
    });
  }

  private paramId: string = '';

  public name: string = "";
  public salary: number = 0;
  public age: string = "";
  public image: string = "";
  public loading: boolean = true;

  openDialog() {
    this.dialog.open(DialogElementsDialog);
    this.router.navigate(['/']);
  }
}
@Component({
  selector: 'dialog-elements-dialog',
  templateUrl: 'dialog-elements-dialog.html',
})
export class DialogElementsDialog {}
