import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public employees: any[] = [];

  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);


  constructor( private data: DataService ) {}

  ngOnInit(): void {
    let requestObject = {
      type: 'GET',
      location: 'employees'
    };

    this.data.makeRequest(requestObject).then((res) => {
      if(res.status == 'success'){
        this.employees = res.data;
        this.createSvg();
        this.drawBars(this.employees);
      }
    });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(dataD3: any[]): void {
    //Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(dataD3.map(d => d.employee_age))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 800000])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(dataD3)
    .enter()
    .append("rect")
    .attr("x", d => x(d.employee_age))
    .attr("y", d => y(d.employee_salary))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.employee_salary))
    .attr("fill", "#fc8621");
  }
}
