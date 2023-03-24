import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {
  @Input() usuario = '';
  @Input() tipo = '';
  cor = 'roxo';

  muda() {
    this.tipo = 'Premium';

    if (this.tipo === "Premium") {
      this.cor = 'verde'
    }
    if (this.tipo === "Padrão") {
      this.cor = "roxo"
    }
  }

  desmuda() {
    this.tipo = 'Padrão';

    if (this.tipo === "Premium") {
      this.cor = 'verde'
    }
    if (this.tipo === "Padrão") {
      this.cor = "roxo"
    }
  }
}
