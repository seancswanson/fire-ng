import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.less']
})
export class LocationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Location Form init...')
  }

}
