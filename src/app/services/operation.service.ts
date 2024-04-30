import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';
import { OperacaoDTO } from "../models/operacao.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class OperationEndpointService {
    private url = environment.url;

    base = 'operations/';

    constructor(private readonly http: HttpClient) { } 

    findLast() {
        return this.http.get<OperacaoDTO[]>(`${this.url}${this.base}`);
    }
}
