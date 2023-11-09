import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    // Aquí puedes manejar el envío del formulario
    if (form.valid) {
      // Si el formulario es válido, redirige a otra página
      this.router.navigate(['/login']);
    }else{
      console.log("invalido")
    }
    this.router.navigate(['/login']);
  }
}
