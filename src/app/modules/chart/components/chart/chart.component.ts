import { Component, OnInit } from '@angular/core';

import { ChartService } from '../../services';
import { UtilsService } from '../../../../shared';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  // lineChart
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = ['first req', 'second req', 'third req'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(
    private utilsService: UtilsService,
    private chartService: ChartService
  ) { }

  ngOnInit() {
    this.utilsService.load().then(
      () => {
        this.setAddressTime();
        this.setCoordsTime();
      }
    )

  }

  setAddressTime() {
    let addresses = this.chartService.getAddress();
    this.chartService.toCoords(addresses).subscribe(
      (data) => {
        let line = {
          data: data,
          label: 'Address to Coords'
        }
        this.lineChartData.push(line);
      }
    )
  }


  setCoordsTime() {
    let coords = this.chartService.getCoords();
    this.chartService.toAddress(coords).subscribe(
      (data) => {
        let line = {
          data: data,
          label: 'Coords to Address'
        }
        this.lineChartData.push(line);
      }
    )
  }

}
