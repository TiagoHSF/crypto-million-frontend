import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, FormsModule, MatButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  nomeCompleto!: string;
  email!: string;
  senha!: string;
  confirmarSenha!: string;

  constructor(private readonly router: Router){
    
  }

  cadastro(){

  }

  login(){
    this.router.navigateByUrl("/externo/login");
  }

}
