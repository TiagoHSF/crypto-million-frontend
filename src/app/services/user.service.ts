import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';
import { OperacaoDTO } from "../models/operacao.model";
import { HttpClient } from "@angular/common/http";
import { UserDTO } from "../models/user.model";
import { LoginDTO } from "../models/login.model";

@Injectable({
    providedIn: 'root',
})
export class UserEndpointService {
    private url = environment.url;

    base = 'user/';

    constructor(private readonly http: HttpClient) { }

    create(body: UserDTO) {
        return this.http.post<string>(`${this.url}${this.base}`, body);
    }

    login(body: LoginDTO) {
        return this.http.post<string>(`${this.url}${this.base}/login`, body);
    }

}
