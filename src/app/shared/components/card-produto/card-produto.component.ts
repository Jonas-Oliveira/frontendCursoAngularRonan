import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})

export class CardProdutoComponent {
  @Input() foto!: string;
  @Input() nomeProduto!: string;
  @Input() promocao!: boolean;
  @Input() idProduto!: number;
  @Input() dataValidade!: string;
  @Input() precoProduto!: number;

}
