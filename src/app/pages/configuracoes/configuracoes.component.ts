import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule, MatButtonModule, FileUploadModule],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss'
})
export class ConfiguracoesComponent implements OnInit {

  email!: string;

  contaCriada!: boolean;

  constructor(){

  }

  ngOnInit(): void {
    this.contaCriada = false;
  }

  criarConta(){
    this.contaCriada = true;
    window.open("https://trade.avalonbroker.io/register?aff=405299&aff_model=revenue&afftrack=", "_blank")
  }

  deposito(){

  }

  onUpload($event: any){

  }

}
