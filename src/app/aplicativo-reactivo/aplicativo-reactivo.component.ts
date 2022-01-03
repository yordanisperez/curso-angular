import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidaCi } from './validaCi';

@Component({
  selector: 'app-aplicativo-reactivo',
  templateUrl: './aplicativo-reactivo.component.html',
  styleUrls: ['./aplicativo-reactivo.component.css']
})
export class AplicativoReactivoComponent implements OnInit {
  form: FormGroup;
  enviado:boolean;
  constructor(private fctrl: FormBuilder) {
    this.enviado=false;
    this.form = fctrl.group({
      ci: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        ValidaCi.validaCi,
      ])],

    })
  }
  onSubmit() {
    this.enviado=true;
    console.log("Evento submit fue llamado")
    console.log(`
    codigo: ${this.form.controls['ci'].value}
    Form: ${JSON.stringify(this.form.value)}
    `)
  }
  ngOnInit(): void {
  }
}
