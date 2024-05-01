import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, LoginComponent, CadastroComponent, OperacoesComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  public externo = false;

  public login = false;
  public cadastro = false;

  expandir = true;

  constructor(private readonly router: Router,
    private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.verificarRota();

  }

  verificarRota() {
    setInterval(() => {
      if(this.router.url != "/"){
        if (this.router.url.includes("login")) {
          this.login = true;
          this.cadastro = false;
        } else if (this.router.url.includes("cadastro")) {
          this.cadastro = true;
          this.login = false;
        } else {
          this.cadastro = false;
          this.login = false
        }
      } else {
        this.router.navigateByUrl("/login");
      }
    }, 100)
  }

  sidebar() {
    const expansaoSideElement = document.getElementById('expansaoSide');
    const sidebarElement = this.elementRef.nativeElement.querySelector('app-sidebar');
    if (sidebarElement.style.display == '' || sidebarElement.style.display == 'none') {
      sidebarElement.style.display = 'flex';
      sidebarElement.style.zIndex = '99999';
      this.expandir = false;
      if (expansaoSideElement) {
        expansaoSideElement.style.marginLeft = '340px';
      }
    } else {
      sidebarElement.style.display = 'none'
      this.expandir = true;
      if (expansaoSideElement) {
        expansaoSideElement.style.marginLeft = '0px';
      }
    }

  }

  title = 'app-crypto-million';
}
