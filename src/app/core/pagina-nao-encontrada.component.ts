import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <div class="notfound404">
                    <h1>:(</h1>
                </div>
        <div class="login-wrapper" fxLayout="row" fxLayoutAlign="center center">

            <mat-card>

                <h2
                    fxLayout="row"
                    fxLayout.xs="column"
                    fxLayoutAlign="center center"
                    fxLayoutAlign.xs="center stretch"
                >
                    Erro 404 - Página não encontrada
                </h2>
                <p>
                    Desculpe, mas a página requerida não foi encontrada. Ela
                    deve ter sido removida ou você deve ter digitado o endereço
                    incorretamente.
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
export class PaginaNaoEncontradaComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    returnLogin(): void {
        this.router.navigateByUrl('login');
    }
}
