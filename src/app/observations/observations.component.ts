import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.less']
})
export class ObservationsComponent implements OnInit {
  @Input() dataOb: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Observations init...')
  }

}
