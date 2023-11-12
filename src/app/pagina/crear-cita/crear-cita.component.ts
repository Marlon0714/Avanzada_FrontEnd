import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);

    if (form.valid) {

    } else {
      // Si el formulario no es válido, muestra un mensaje de error
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}

