import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Kid } from "../../store/model";

@Component({
  selector: 'app-kid-chart',
  templateUrl: './kid-chart.component.html',
  styleUrls: ['./kid-chart.component.css']
})
export class KidChartComponent implements OnInit, OnChanges {

  @Input() kids: Kid[];

  public lineChartData: Array<any> = [
    { data: [0], label: '' }
  ];

  ngOnInit() {

    console.log('kids', this.kids);

    // kids is undefined so wait to populate line chart until ngOnChanges fires

  }

  ngOnChanges(changes: SimpleChanges) {

    if (!this.kids || !this.kids.length) return;

    let _lineChartData = this.kids.map(kid => {
      let obj: any = {};
      obj.label = kid.name;
      obj.data = [
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
      ];
      return obj;
    });

    console.log(_lineChartData);

    this.lineChartData = _lineChartData;


  }



  public lineChartLabels: Array<any> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // light blue
      backgroundColor: 'rgba(76, 193, 252, 0.8)',
      borderColor: 'rgba(43, 142, 176,1)',
      pointBackgroundColor: 'rgba(43, 142, 176,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(46, 249, 160, 0.8)',
      borderColor: 'RGBA(12, 180, 155, 1.00)',
      pointBackgroundColor: 'RGBA(12, 180, 155, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // orange
      backgroundColor: 'RGBA(247, 148, 50, 0.8)',
      borderColor: 'RGBA(243, 112, 85, 1)',
      pointBackgroundColor: 'RGBA(247, 148, 50, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // pink
      backgroundColor: 'RGBA(239, 77, 123, 0.8)',
      borderColor: 'RGBA(243, 112, 85, 1)',
      pointBackgroundColor: 'RGBA(161, 102, 171, 1.00)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';



  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
