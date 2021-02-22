import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

/* Angular Material */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Firebase */
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFireAuthGuard } from './core/seguranca/auth-guard';
import { OpenWeatherMapModule } from './open-weather-map/open-weather-map.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,

        BrowserAnimationsModule,

        AngularMaterialModule,
        FlexLayoutModule,

        CoreModule,
        OpenWeatherMapModule,

        AppRoutingModule,
    ],
    providers: [AngularFireAuthGuard],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
