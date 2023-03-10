import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {

  // listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  // listaNumeros: number[] = [15, 15.18, 100];

  // objetoModelo = {
  //   nome: 'Jonas',
  //   idade: 46,
  //   altura: 1.73,
  //   graduado: true
  // };

  // listaProdutos: any[] = [
  //   {nome: 'Curso de Angular', preco: 35.56, validade: '2021-12-31', id: 1},
  //   {nome: 'Curso de Ionic', preco: 50, validade: '2021-12-31', id: 2, promocao: true},
  //   {id: 3, nome: 'Curso de Ionic Avançado', validade: '2021-10-31', preco: 50}
  // ];

  listaProdutos: IProduto[] = [];

  constructor(private produtosService: ProdutosService){
    // for (let item of this.listaStrings){
    //   console.log(item);
    // }

    // for(const item of this.listaNumeros){
    //   console.log(item);
    // }

    // console.log(this.objetoModelo);

    // console.log(this.objetoModelo.nome);
  }

  ngOnInit(): void{
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno =>{
      this.listaProdutos = retorno;
    });
  }

  deletar(produto: IProduto): void{
    this.produtosService.excluir(produto.id).subscribe(() => {
      this.produtosService.exibirMensagem(
        'Concluído',
        `${produto.nome} foi excluído com sucesso`,
        'toast-error'
      );
      this.carregarProdutos();
    });
  }
}
