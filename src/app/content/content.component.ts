import { Component, OnInit } from '@angular/core';
import AerisWeather from '@aerisweather/javascript-sdk';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  aeris = new AerisWeather('ERnpo9XYQqrry4Bn55zFW', '5frRIVQKuesAzR9NLGHxlNqEwqyYA09eexIO0tmc');
  data: any = {};
  dataOb: any = {};
  alertOb: any = {};
  mapOb: any = {};
  constructor() {
    this.getObservations();
    this.getAirQuality();
    this.getAlerts();
    this.getMap();
  }

  ngOnInit(): void {
  }

  getObservations() {
    this.aeris.api().endpoint('observations').place('98033').get().then((result) => {
      this.data = result.data;
      this.dataOb = result.data.ob;
    });
  }

  getAirQuality() {
    this.aeris.api().endpoint('airquality').place('98033').get().then((result) => {
      console.log(result)
    });
  }

  getAlerts() {
    this.aeris.api().endpoint('alerts').place('98033').get().then((result) => {
      this.alertOb = result.data[0].details;
    });
  }

  getMap() {
    this.aeris.map().layers('flat-dk,temperatures,water-flat-dk,counties-dk:60,admin-dk').center('seattle,wa').zoom(6).size(600, 400).get().then((result) => {
      const { image, metadata: { validDate } } = result;
      if (image) {
        this.mapOb.imgSrc = image.src
      }
    }
    );
  }
}
