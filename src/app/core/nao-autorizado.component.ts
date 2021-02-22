import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <div class="login-wrapper" fxLayout="row" fxLayoutAlign="center center">
            <mat-card class="box">
                <h2>Erro 401 - Acesso não autorizado</h2>
                <p>
                    Usuário não possui permissão para prosseguir ou acessar a
                    funcionalidade.
                </p>
                <a
                    fxLayout.xs="column"
                    fxLayoutAlign="center"
                    fxLayoutAlign.xs="center stretch"
                    mat-button
                    mat-raised-button
                    routerLink="register"
                    routerLinkActive="active"
                    (click)="returnLogin()"
                    >Voltar para o site
                </a>
            </mat-card>
        </div>
    `,
})
export class NaoAutorizadoComponent implements OnInit {
    constructor(private router: Router) {}
    ngOnInit(): void {}

    public returnLogin(): void {
        this.router.navigateByUrl('login');
    }
}
