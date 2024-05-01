import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  email!: string;
  senha!: string;

  constructor(private readonly router: Router,
    private readonly changeDetector: ChangeDetectorRef) {

  }

  ngOnInit(): void {

  }

  login() {
    this.router.navigateByUrl("/dashboard");
  }

  cadastro() {
    this.router.navigateByUrl("/cadastro")
      .then(() => {
        this.changeDetector.detectChanges();
      })
  }


}
