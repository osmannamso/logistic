import {Component, OnInit} from '@angular/core';
import {LandingData} from '../../shared/interfaces/landing-data';
import {ContentService} from '../../services/content.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public landingData: LandingData;
  public currentCommentIndex = 0;

  constructor(
    private contentService: ContentService
  ) { }

  public ngOnInit(): void {
    this.getLandingData();
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
