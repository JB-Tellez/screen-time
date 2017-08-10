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
    { data: [], label: '' }
  ];

  ngOnInit() {

    console.log('kids', this.kids);

    // kids is undefined so wait to populate line chart until ngOnChanges fires

  }

  ngOnChanges(changes: SimpleChanges) {

    if (!this.kids) return;

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
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
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
