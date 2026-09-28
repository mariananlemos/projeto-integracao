import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from './services/produtos.service';
import { Produto } from './models/produto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  produtos: Produto[] = [];
  
  // Produto novo
  novoProduto = { nome: '', preco: 0 };
  
  // Produto em edição
  produtoEditandoId: number | null = null;
  produtoEditando = { nome: '', preco: 0 };
  
  // Busca
  buscaId: number | null = null;
  produtoBuscado: Produto | null = null;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtosService.listarTodos().subscribe(
      dados => this.produtos = dados
    );
  }

  buscar() {
    if (this.buscaId) {
      this.produtosService.buscarPorId(this.buscaId).subscribe({
        next: (produto) => this.produtoBuscado = produto,
        error: () => {
          alert('Produto não encontrado!');
          this.produtoBuscado = null;
        }
      });
    }
  }

  adicionar() {
    this.produtosService.criar(this.novoProduto).subscribe(() => {
      this.novoProduto = { nome: '', preco: 0 };
      this.carregarProdutos();
    });
  }

  iniciarEdicao(produto: Produto) {
    this.produtoEditandoId = produto.id;
    this.produtoEditando = { nome: produto.nome, preco: produto.preco };
  }

  salvarEdicao(id: number) {
    this.produtosService.atualizar(id, this.produtoEditando).subscribe(() => {
      this.produtoEditandoId = null;
      this.carregarProdutos();
    });
  }

  cancelarEdicao() {
    this.produtoEditandoId = null;
  }

  remover(id: number) {
    if (confirm('Tem certeza que deseja remover este produto?')) {
      this.produtosService.remover(id).subscribe(() => {
        this.carregarProdutos();
      });
    }
  }
}
