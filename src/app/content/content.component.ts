import { Component, OnInit } from '@angular/core';
import AerisWeather from '@aerisweather/javascript-sdk';
import { NgxSpinnerService } from "ngx-spinner";

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
  aqiOb: any = {};
  mapOb: any = {};

  selectedLocation = this.buildLocation('seattle', 'wa');

  constructor(private spinner: NgxSpinnerService) {
    this.getObservations();
    this.getAirQuality();
    this.getAlerts();
    this.getMap();

  }

  ngOnInit(): void {
    this.spinner.show();

  }

  getObservations() {
    this.aeris.api().endpoint('observations').place(this.selectedLocation).get().then((result) => {
      this.data = result.data;
      this.dataOb = result.data.ob;
    });
  }

  getAirQuality() {
    this.aeris.api().endpoint('airquality').place(this.selectedLocation).get().then((result) => {
      console.log(result.data[0].periods[0])
      this.aqiOb = {
        aqiValue: result.data[0].periods[0].aqi,
        aqiLabel: result.data[0].periods[0].category
      }
    });
  }

  getAlerts() {
    this.aeris.api().endpoint('alerts').place(this.selectedLocation).get().then((result) => {
      this.alertOb = result.data[0].details;
    });
  }

  getMap() {
    this.aeris.map().layers('flat-dk,terrain-dk,water-depth,admin-dk,air-quality').center(this.selectedLocation).zoom(6).size(600, 400).get().then((result) => {
      const { image, metadata: { validDate } } = result;
      if (image) {
        this.mapOb.imgSrc = image.src
      }
      this.spinner.hide();

    }
    );
  }

  buildLocation(city, state) {
    return `${city},${state}`;
  }
}
