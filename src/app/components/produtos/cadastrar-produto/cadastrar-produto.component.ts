import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  produto: IProduto = {
    nome: "",
    validade: new Date,
    preco: 0
  };

  constructor(private produtosService: ProdutosService, private router: Router){ }

   salvarProduto(): void{
    this.produtosService.cadastrar(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Concluído',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }


  // para testar two-way biding
  // nome!: string;
  // validade!: string;
  // preco!: number;

  // salvarProduto(): void{
  //   console.log('Nome: ', this.nome);
  //   console.log('Validade: ', this.validade);
  //   console.log('Preço: ', this.preco);
  //   alert('Salvo com sucesso !');
  // }

}
