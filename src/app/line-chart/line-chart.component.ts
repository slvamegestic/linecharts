import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
	
  public lineChartData: ChartDataSets[] = [
	{ data: [85, 72, 78, 74, 77, 75], label: 'cpu-percentage' }
  ];
  
  public lineChartLabels: Label[] = ['1','2','3','4','5','6'];

  public lineChartOptions = {
	responsive: true,
  };

  lineChartColors: Color[] = [
	{
		borderColor: 'black',
		backgroundColor: 'rgba(255,255,0,0.28)',
	},
  ];

  public lineChartLegend = true;
  public lineChartPlugins = [];
  public lineChartType = "line";

  constructor() { }

  ngOnInit(): void {
  }

}
