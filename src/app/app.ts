import {
  Component, signal
} from '@angular/core';

import {
  RouterOutlet
} from '@angular/router';

import {
  CommonModule
} from '@angular/common';

@Component({
  imports: [RouterOutlet, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('app-dados');

  dadoIzquierdo: String = "dados/dice1.png";
  dadoDerecho: String = "dados/dice2.png";

  numero1: number = 0;
  numero2: number = 0;
  resultado: string = "";

  tirarDados() {
    this.numero1 = Math.floor(Math.random() * 5) + 1;
    this.numero2 = Math.floor(Math.random() * 5) + 1;

    console.log("Numerito 1: " + this.numero1);
    console.log("Numerito 2: " + this.numero2);

    this.dadoIzquierdo = "dados/dice" + this.numero1 + ".png";
    this.dadoDerecho = "dados/dice" + this.numero2 + ".png";

    if (this.numero1 == this.numero2) {
      this.resultado = "¡Has ganado, FELICIDADES! :)"
    } else {
      this.resultado = "¡Has perdido, INTÉNTALO DE NUEVO! :("
    }
  }
}