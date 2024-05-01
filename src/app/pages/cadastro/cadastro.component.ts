import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { UserEndpointService } from '../../services/user.service';
import { UserDTO } from '../../models/user.model';

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

  constructor(private readonly router: Router,
    // private readonly userEndpointService: UserEndpointService
    ) {

  }

  cadastro() {
    if (this.senha == this.confirmarSenha) {
      const user = {
        email: this.email,
        senha: this.senha,
        nomeCompleto: this.nomeCompleto
      } as UserDTO;
      // this.userEndpointService.create(user)
      //   .subscribe({
      //     next: (data) => {
      //       console.log(data)
      //     }
      //   })
    }
  }

  login() {
    this.router.navigateByUrl("/login");
  }

}
