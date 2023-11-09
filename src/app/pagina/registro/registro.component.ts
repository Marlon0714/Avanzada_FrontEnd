import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private router: Router) { }

  onFileChange(event: Event) {
    const reader = new FileReader();

    if(event.target instanceof HTMLInputElement && event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imagePreview = reader.result;
      };
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    // Aquí puedes manejar el envío del formulario
    if (form.valid) {
      // Si el formulario es válido, redirige a otra página
      this.router.navigate(['/login']);
    } else {
      // Si el formulario no es válido, muestra un mensaje de error
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
