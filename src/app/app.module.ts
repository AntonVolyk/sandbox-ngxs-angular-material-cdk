
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { MaterialState } from './store/material-state';
import { PortalComponent } from './portal/portal.component';
import { SliderComponent } from './slider/slider.component';
import { environment } from 'src/environments/environment';
import { PortalModule } from '@angular/cdk/portal';
import { A11yComponent } from './a11y/a11y.component';
import { A11yModule } from '@angular/cdk/a11y';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    SliderComponent,
    A11yComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([MaterialState], {developmentMode: !environment.production}),
    MatSliderModule,
    PortalModule,
    ObserversModule,
    A11yModule,
    OverlayModule,
    PlatformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
