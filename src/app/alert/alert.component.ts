import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  @Input() alertType: string;
  @Input() alertBody: string;

  visible: boolean = this.getLocalValue('alertVisible');
  infoShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleInfo() {
    this.infoShown = !this.infoShown;
  }

  clearAlert() {
    this.visible = false;
    window.localStorage.setItem('alertVisible', 'false');
  }

  getLocalValue(key) {
    if (!window.localStorage.getItem('alertVisible')) {
      return true;
    } else {
      return JSON.parse(window.localStorage.getItem('alertVisible'))
    }
  }
}
