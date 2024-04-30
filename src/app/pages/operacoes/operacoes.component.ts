import { Component, OnInit } from '@angular/core';
import { OperacaoDTO } from '../../models/operacao.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OperationEndpointService } from '../../services/operation.service';



@Component({
  selector: 'app-operacoes',
  standalone: true,
  imports: [CommonModule, ButtonModule, DividerModule, MatProgressBarModule],
  templateUrl: './operacoes.component.html',
  styleUrl: './operacoes.component.scss'
})
export class OperacoesComponent implements OnInit {

  operacoes: OperacaoDTO[] = [];

  entradaDisponivel!: OperacaoDTO;

  constructor(
    // private readonly operationEndpointService: OperationEndpointService
    ){

  }

  ngOnInit(): void {
    
    const operacao = {
      moeda: "SHIBA INO",
      tipo: "COMPRA",
      expiracao: "1 MINUTO",
      hora: "13:48"
    } as OperacaoDTO
    // this.entradaDisponivel = operacao;
    this.operacoes.push(operacao);
    this.operacoes.push(operacao);
    this.operacoes.push(operacao);
  }


  // ngOnInit(): void {
  //   this.operationEndpointService.findLast()
  //     .subscribe({
  //       next: (data) => {
  //         this.operacoes = data;
  //       }
  //     })
  // }

}
