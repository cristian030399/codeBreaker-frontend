import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CodeBreakerService } from 'src/app/services/code-breaker.service';

@Component({
  selector: 'app-code-braker',
  templateUrl: './code-braker.component.html',
  styleUrls: ['./code-braker.component.css']
})
export class CodeBrakerComponent implements OnInit {
  
  codeBreaker = {
    codigoOculto: '',
    codigoAdivinado: '',
    resultado: ''
  };

  cambiarCodigo = true;

  constructor(private codeBreakerService: CodeBreakerService) { }


  ngOnInit() {
  }

  adividar() {
    this.codeBreakerService.guessCharacter(this.codeBreaker.codigoAdivinado, this.codeBreaker.codigoOculto).subscribe(data => {
      this.codeBreaker.resultado = data.result;
    });
  }

  cambiarCodigoOculto(cod: string) {
    this.codeBreaker.codigoOculto = cod;
    this.cambiarCodigo = !this.cambiarCodigo;
  }

}
