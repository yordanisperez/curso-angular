import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-intro',
  templateUrl: './form-intro.component.html',
  styleUrls: ['./form-intro.component.css']
})
export class FormIntroComponent implements OnInit {
  title = 'formIntro';
  codigo:string='';
  nombre:string='';
  edad:number=20;
  opcion:string=''
  sexo:String="Hombre"
  comentario:string=''
  activar:boolean=true
  email:string=''
  movil:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  mostrarValor(){
    console.log(`
                 CODIGO:    ${this.codigo}
                 NOMBRE:    ${this.nombre}
                 EDAD:      ${this.edad}
                 OPCION:    ${this.opcion}
                 SEXO:      ${this.sexo}
                 COMENTARIO:${this.comentario}
                 ACTIVAR:   ${this.activar}
                 `)
  }
  onSubmit(){
    console.log("onSubmit")
  }
}
