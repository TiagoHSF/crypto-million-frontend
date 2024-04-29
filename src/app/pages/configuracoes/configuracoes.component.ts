import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';


@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [InputTextModule, FormsModule, MatButtonModule, FileUploadModule],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.scss'
})
export class ConfiguracoesComponent implements OnInit {

  email!: string;

  constructor(){

  }

  ngOnInit(): void {
  }

  corretora(){

  }

  onUpload($event: any){

  }

}
