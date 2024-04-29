import { Component, NgModule, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {

  sidebarVisible: boolean = true;

  constructor(
    private readonly router: Router
  ){

  }

  ngOnInit(): void {

  }

  navigate(route: string){
    switch(route){
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
