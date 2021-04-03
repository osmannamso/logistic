import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingComponent} from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
