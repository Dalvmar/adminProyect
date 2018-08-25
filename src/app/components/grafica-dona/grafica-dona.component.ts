import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {

  @Input('ChartLabels')public doughnutChartLabels:string[] = [];
  @Input('ChartData')public doughnutChartData:number[] =[] ;
  @Input('ChartType')public doughnutChartType:string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
