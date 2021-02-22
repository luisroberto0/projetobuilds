import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from './../../environments/environment';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        NaoAutorizadoComponent,
        PaginaNaoEncontradaComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        FlexLayoutModule,

        NgxAuthFirebaseUIModule.forRoot(
            environment.firebaseKey,
            environment.firebaseAppNameFactory,
            {
                enableFirestoreSync: true,
                toastMessageOnAuthSuccess: true,
                toastMessageOnAuthError: true,
                authGuardFallbackURL: '/loggedout',
                authGuardLoggedInURL: '/loggedin',
                passwordMaxLength: 60,
                passwordMinLength: 8,
                nameMaxLength: 50,
                nameMinLength: 2,
                guardProtectedRoutesUntilEmailIsVerified: true,
                enableEmailVerification: true,
                useRawUserCredential: true,
            }
        ),
    ],
})
export class CoreModule {}
