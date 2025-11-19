import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmprendedorDetail } from './emprendedor-detail';

@Injectable({
    providedIn: 'root'
})
export class EmprendedorService {
    private url = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json';

    constructor(private http: HttpClient) { }

    getEmprendedores(): Observable<EmprendedorDetail[]> {
        return this.http.get<EmprendedorDetail[]>(this.url + '/emprendedores.json');
    }

    getEmprendedorDetail(id: number): Observable<EmprendedorDetail> {
        return this.http.get<EmprendedorDetail>(this.url + '/' + id + '/emprendedor.json');
    }
}