import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, MenuModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  labelButton = 'HOJE';

  items = [
    {
      items: [
        {
          label: 'HOJE',
          icon: 'ph-fill ph-calendar-x"',
          command: () => {
            this.alterarData('HOJE');
          }
        },
        {
          label: 'ONTEM',
          icon: 'ph-fill ph-calendar-x"',
          command: () => {
            this.alterarData('ONTEM');
          }
        },
        {
          label: 'ÚLTIMOS 7 DIAS',
          icon: 'ph-fill ph-calendar-x"',
          command: () => {
            this.alterarData('7 DIAS');
          }
        },
        {
          label: 'ÚLTIMOS 30 DIAS',
          icon: 'ph-fill ph-calendar-x"',
          command: () => {
            this.alterarData('30 DIAS');
          }
        }
      ]
    },
  ];

  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "UK",
      "value": 5200000
    },
    {
      "name": "Italy",
      "value": 7700000
    },
    {
      "name": "Spain",
      "value": 4300000
    }
  ];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor() {
  }

  onSelect($event: any) {

  }

  alterarData(data: string) {
    switch (data) {
      case "HOJE":
        this.labelButton = 'HOJE';
        break;
      case "ONTEM":
        this.labelButton = 'ONTEM';
        break;
      case "7 DIAS":
        this.labelButton = '7 DIAS';
        break;
      case "30 DIAS":
        this.labelButton = '30 DIAS'
        break;
    }
  }

}
