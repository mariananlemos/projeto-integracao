import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Produto } from '../models/produto.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private apiUrl = 'http://localhost:5027/api/Produtos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Produto[]> {
    return this.http
      .get<ApiResponse<Produto[]>>(this.apiUrl)
      .pipe(map(res => res.dados ?? []));
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http
      .get<ApiResponse<Produto>>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res.dados!));
  }

  criar(produto: { nome: string; preco: number }): Observable<Produto> {
    return this.http
      .post<ApiResponse<Produto>>(this.apiUrl, produto)
      .pipe(map(res => res.dados!));
  }

  atualizar(id: number, produto: { nome: string; preco: number }): Observable<Produto> {
    return this.http
      .put<ApiResponse<Produto>>(`${this.apiUrl}/${id}`, produto)
      .pipe(map(res => res.dados!));
  }

  remover(id: number): Observable<void> {
    return this.http
      .delete<ApiResponse<boolean>>(`${this.apiUrl}/${id}`)
      .pipe(map(() => void 0));
  }
}
