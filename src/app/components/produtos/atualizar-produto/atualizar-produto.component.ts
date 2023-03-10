import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent {

  produto: IProduto = {
    nome: "",
    validade: new Date,
    preco: 0
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRouter: ActivatedRoute){ }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
    });
  }

   salvarProduto(): void{
    this.produtosService.atualizar(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Concluído',
        `${this.produto.nome} foi atualizado com sucesso.`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }

}
