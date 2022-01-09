import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-aplicativo-vi',
  templateUrl: './aplicativo-vi.component.html',
  styleUrls: ['./aplicativo-vi.component.css']
})
export class AplicativoVIComponent implements OnInit {
  form: FormGroup;
  imagen:string="imagen1"
  constructor(private fctrl: FormBuilder,private enrutador: Router) {
    this.form = fctrl.group({
      img: ['', Validators.compose([])],

    })
  }

  ngOnInit(): void {
  }
  onSubmit(event: any){
    this.enrutador.navigateByUrl('/' + this.form.controls['img'].value);
    console.log(`
      Form: ${JSON.stringify(this.form.value)}
      imagen:${this.imagen}
    `)
}
}
