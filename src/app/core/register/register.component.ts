import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    logoUrl = '/assets/logo.png';
    titleText = 'CRIE A SUA CONTA AQUI';
    nameText = 'Nome';
    emailText = 'E-mail';
    passwordText = 'Senha';
    passwordConfirmationText = 'ConfirmaÇão da Senha';
    passwordConfirmationErrorRequiredText = 'A confirmação da senha é necessária';
    emailErrorPatternText = 'Por favor insira um endereço de e-mail válido';
    emailErrorRequiredText = 'E-mail é obrigatório';
    passwordErrorRequiredText = 'Senha é obrigatório';
    alreadyHaveAccountText = 'já tem uma conta?';
    createAccountButtonText = 'CRIE A SUA CONTA AQUI';
    nameErrorRequiredText = 'Nome é obrigatório';
    passwordErrorMinLengthText = 'A senha é muito curta!';

    constructor(private router: Router) {}

    ngOnInit(): void {}

    onSuccessLogin(): void {
        this.router.navigate(['open-weather-map']);
    }

    onLoginRequested(): void {
        this.router.navigate(['register']);
    }
}


