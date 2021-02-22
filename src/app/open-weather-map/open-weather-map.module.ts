import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { OpenWeatherMapRoutingModule } from './open-weather-map-routing.module';
import { OpenWeatherMapComponent } from './open-weather-map.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localeBr from '@angular/common/locales/pt';

registerLocaleData(localeBr, 'pt');

@NgModule({
    declarations: [OpenWeatherMapComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        AngularMaterialModule,
        FlexLayoutModule,

        OpenWeatherMapRoutingModule,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' }
    ]
})
export class OpenWeatherMapModule {}
