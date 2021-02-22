import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '../core/seguranca/auth-guard';
import { OpenWeatherMapComponent } from './open-weather-map.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['nao-autorizado']);

const routes: Routes = [
    {
        path: 'open-weather-map',
        component: OpenWeatherMapComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OpenWeatherMapRoutingModule {}
