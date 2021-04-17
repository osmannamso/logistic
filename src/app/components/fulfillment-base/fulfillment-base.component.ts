import { Component, OnInit } from '@angular/core';
import {LandingData} from '../../shared/interfaces/landing-data';
import {ContentService} from '../../services/content.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-fulfillment-base',
  templateUrl: './fulfillment-base.component.html',
  styleUrls: ['./fulfillment-base.component.scss']
})
export class FulfillmentBaseComponent implements OnInit {
  public landingData: LandingData;

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.contentService.getLandingData()
      .pipe(take(1))
      .subscribe((data) => {
        this.landingData = data;
      });
  }

}
