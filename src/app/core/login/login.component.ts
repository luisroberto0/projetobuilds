import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    logoUrl = '/assets/logo.png';
    titleText = 'FAÇA LOGIN NA SUA CONTA';
    emailText = 'E-mail';
    passwordText = 'Senha';
    emailErrorPatternText = 'Por favor insira um endereço de e-mail válido';
    emailErrorRequiredText = 'E-mail é obrigatório';
    passwordErrorRequiredText = 'Senha é obrigatório';
    forgotPasswordText = 'Esqueceu a senha?';
    createAccountButtonText = 'Crie a sua conta aqui';
    dontHaveAnAccountText = 'Não tem conta?';

    providers = [AuthProvider.Google];

    constructor(private router: Router) {}

    ngOnInit(): void {}

    onSuccessLogin(): void {
        this.router.navigate(['open-weather-map']);
    }

    goToCreateAccount(): void {
        this.router.navigate(['register']);
    }
}
