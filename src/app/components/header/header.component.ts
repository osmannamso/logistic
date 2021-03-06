import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Languages} from '../../shared/variables/enums';
import {StorageMethods} from "../../shared/helpers/storage-methods";
import {LANGUAGE_KEY} from "../../shared/variables/values";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isActiveMenu = false;
  public isActiveLanguage = false;
  public currentLang: string;

  public languages = Languages;

  @ViewChild('languageElement')
  public languageElement: ElementRef;

  constructor(
    private translateService: TranslateService
  ) {
    this.setLanguage(StorageMethods.localStorageGetItem(LANGUAGE_KEY) || 'ru');
  }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  public handleClick(event: MouseEvent): void {
    if (!this.languageElement.nativeElement.contains(event.target)) {
      this.isActiveLanguage = false;
    }
  }

  public showMenu(): void {
    this.isActiveMenu = true;
  }

  public hideMenu(): void {
    this.isActiveMenu = false;
  }

  public toggleLanguage(): void {
    this.isActiveLanguage = !this.isActiveLanguage;
  }

  public setLanguage(language: Languages): void {
    this.isActiveLanguage = false;
    this.translateService.setDefaultLang(language);
    this.currentLang = language;
    StorageMethods.localStorageSetItem(LANGUAGE_KEY, language);
  }
}
