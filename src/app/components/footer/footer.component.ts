import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {take} from 'rxjs/operators';
import {LandingData} from '../../shared/interfaces/landing-data';

declare var ymaps: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
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
}
