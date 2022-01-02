import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FiltrarCaracteres } from "./validaCaracteres";
@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  form: FormGroup;
  constructor(private fctrl: FormBuilder) {
    this.form = fctrl.group({
      codigo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6),
      ])],
      nombre: ['', Validators.compose([Validators.required,
      FiltrarCaracteres.filtrarCaracteres])],
      aficiones: fctrl.group({
        aficion1: '',
        aficion2: ''
      })
    })
  }
  onSubmit() {
    console.log("Evento submit fue llamado")
    console.log(`
    codigo: ${this.form.controls['codigo'].value}
    Nombre: ${this.form.controls['nombre'].value}
    Aficiones: ${JSON.stringify(this.form.controls['aficiones'].value)}
    Form: ${JSON.stringify(this.form.value)}
    `)
  }
  ngOnInit(): void {
  }

}
