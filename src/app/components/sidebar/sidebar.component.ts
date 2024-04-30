import { Component, NgModule, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenubarModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {

  items = [
    {
      label: 'Início',
      icon: 'ph-fill ph-house',
      command: () => this.navigate('dash')
    },
    {
      label: 'Operações',
      icon: 'ph-fill ph-trend-up',
      command: () => this.navigate('op')
    },
    {
      label: 'Treinamento',
      icon: 'ph-fill ph-users-three',
    },
    {
      label: 'Rentabilidade',
      icon: 'ph-fill ph-currency-dollar',
    },
    {
      label: 'Configurações',
      icon: 'ph-fill ph-gear-six',
      command: () => this.navigate('config')
    },
  ];

  sidebarVisible: boolean = true;

  constructor(
    private readonly router: Router
  ) {

  }

  ngOnInit(): void {

  }

  navigate(route: string) {
    switch (route) {
      case "op":
        this.router.navigateByUrl('/operacoes');
        break;
      case "config":
        this.router.navigateByUrl("/configuracoes");
        break;
      case "dash":
        this.router.navigateByUrl("/dashboard")
    }
  }


}
