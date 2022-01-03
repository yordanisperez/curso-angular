import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ciToDate'
})
export class CiToDatePipe implements PipeTransform {

  transform(value: string): Date {
    const ciArray=value.replace(/^(\d\d)(\d\d)(\d\d)\d+$/,"$1 $2 $3").split(' ')
    const anno:string=ciArray[0]
    const mes:string =ciArray[1]
    const dia:string = ciArray[2]
    console.log(`ciArray: ${ciArray} value: ${value} Año: ${anno} Mes: ${mes} Dia: ${dia}`)
    const fechaNac:Date=new Date(parseInt('19'+anno),parseInt(mes)-1,parseInt(dia))
    return fechaNac;
  }

}
