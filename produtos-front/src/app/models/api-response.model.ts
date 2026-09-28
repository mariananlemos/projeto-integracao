import { Produto } from './produto.model';

export interface ApiResponse<T> {
  sucesso: boolean;
  dados: T | null;
  mensagem: string | null;
}
