import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulfillment-region',
  templateUrl: './fulfillment-region.component.html',
  styleUrls: ['./fulfillment-region.component.scss']
})
export class FulfillmentRegionComponent implements OnInit {
  regionState: 1 | 2 = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public setState(value: 1 | 2): void {
    this.regionState = value;
  }
}
