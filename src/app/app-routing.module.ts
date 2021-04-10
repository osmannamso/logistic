import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingComponent} from './components/landing/landing.component';
import {FulfillmentComponent} from './components/fulfillment/fulfillment.component';
import {FulfillmentBaseComponent} from './components/fulfillment-base/fulfillment-base.component';
import {FulfillmentRegionComponent} from './components/fulfillment-region/fulfillment-region.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'fulfillment',
    component: FulfillmentComponent,
    children: [
      {
        path: '',
        redirectTo: 'base',
        pathMatch: 'full'
      },
      {
        path: 'base',
        component: FulfillmentBaseComponent
      },
      {
        path: 'region',
        component: FulfillmentRegionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
