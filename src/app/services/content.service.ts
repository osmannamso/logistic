import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LandingData} from '../shared/interfaces/landing-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(
    private http: HttpClient
  ) {}

  public getLandingData(): Observable<LandingData> {
    return this.http.get<LandingData>('/assets/content/landing-data.json');
  }
}
