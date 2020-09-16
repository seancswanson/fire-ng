import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.less']
})
export class GaugeComponent implements OnInit {
  @Input() aqiOb: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Gauge init...')
  }

}
