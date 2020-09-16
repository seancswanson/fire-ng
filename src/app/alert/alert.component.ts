import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  @Input() alertType: string;
  @Input() alertBody: string;

  infoShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleInfo() {
    this.infoShown = !this.infoShown;
  }
}
