import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-termplate',
  templateUrl: './termplate.component.html',
  styleUrls: ['./termplate.component.css'],
})
export class TermplateComponent implements OnInit {
  usuario = {
    nombre: 'Pablo',
    apellido: 'Luces',
    correo: 'pluces@.cantv.net',
    pais: '',
    genero: ''
  };

  paises: any = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[Seleccione Pais]',
        codigo: '',
      }),
        console.table(this.paises);
    });
  }

  guardar(forma: NgForm) {
    console.log(forma);
    console.log(forma.value);
    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAsTouched();
      });

      return;
    }
  }
}
