import { Routes } from '@angular/router';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';
import { TreinamentoComponent } from './pages/treinamento/treinamento.component';
import { RentabilidadeComponent } from './pages/rentabilidade/rentabilidade.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'operacoes', component: OperacoesComponent },
    { path: 'treinamento', component: TreinamentoComponent },
    { path: 'rentabilidade', component: RentabilidadeComponent },
    { path: 'configuracoes', component: ConfiguracoesComponent },
    { path: 'externo/login', component: LoginComponent},
    { path: 'externo/cadastro', component: CadastroComponent}
];
