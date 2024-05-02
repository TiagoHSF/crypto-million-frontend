import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import {MatStepperModule} from '@angular/material/stepper';




@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule, MatButtonModule, FileUploadModule, MatStepperModule],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss'
})
export class ConfiguracoesComponent implements OnInit {

  stepCadastro = true;
  stepDeposito = false;
  stepVinculo = false;

  email!: string;

  contaCriada!: boolean;
  primeiroDeposito!: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.contaCriada = false;
  }

  criarConta() {
    this.contaCriada = true;
    window.open("https://trade.avalonbroker.io/register?aff=405299&aff_model=revenue&afftrack=", "_blank")
  }

  deposito() {
    this.primeiroDeposito = true;
  }

  onUpload($event: any) {

  }

  tab(event: any){
    console.log(event);
  }

  completar(){
    
  }

}
