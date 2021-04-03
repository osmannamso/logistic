import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LandingData} from '../../shared/interfaces/landing-data';
import {ContentService} from '../../services/content.service';
import {take} from 'rxjs/operators';

declare var ymaps: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  public landingData: LandingData;
  public currentCommentIndex = 0;

  constructor(
    private contentService: ContentService
  ) { }

  public ngOnInit(): void {
    this.getLandingData();
  }

  public ngAfterViewInit(): void {
    ymaps.ready(() => {
      const myMap = new ymaps.Map('YMapsID', {
        center: [43.238293, 76.921776],
        zoom: 13
      });
      // const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      //   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      // );
      // const placemark = new ymaps.Placemark([43.238293, 76.921776], {
      //   balloonContent: 'Здесь мы'
      // }, {
      //   iconLayout: 'default#imageWithContent',
      //   // Custom image for the placemark icon.
      //   iconImageHref: '/assets/icons/placemark.svg',
      //   // The size of the placemark.
      //   iconImageSize: [48, 48],
      //   /**
      //    * The offset of the upper left corner of the icon relative
      //    * to its "tail" (the anchor point).
      //    */
      //   iconImageOffset: [-24, -24],
      //   // Offset of the layer with content relative to the layer with the image.
      //   iconContentOffset: [15, 15],
      //   // Content layout.
      //   iconContentLayout: MyIconContentLayout
      // });
      // myMap.geoObjects.add(placemark);
    });

  }

  private getLandingData(): void {
    this.contentService.getLandingData()
      .pipe(take(1))
      .subscribe((data) => {
        this.landingData = data;
      });
  }

  public setCurrent(index: number): void {
    this.currentCommentIndex = index;
  }
}
