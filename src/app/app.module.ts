import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { FulfillmentComponent } from './components/fulfillment/fulfillment.component';
import { FulfillmentBaseComponent } from './components/fulfillment-base/fulfillment-base.component';
import { FulfillmentRegionComponent } from './components/fulfillment-region/fulfillment-region.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateMethods} from './shared/helpers/translate-methods';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    FulfillmentComponent,
    FulfillmentBaseComponent,
    FulfillmentRegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ru',
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateMethods.createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
