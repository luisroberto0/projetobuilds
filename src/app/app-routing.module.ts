import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'nao-autorizado', component: NaoAutorizadoComponent },

    {
        path: 'open-weather-map',
        loadChildren: () =>
            import('./open-weather-map/open-weather-map.module').then(
                (m) => m.OpenWeatherMapModule
            ),
    },

    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            initialNavigation: 'enabled',
            relativeLinkResolution: 'legacy',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
