import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from "@angular/forms";
function validaCi(ci: AbstractControl) {
  if (ci.value == null) return null;
  var contenido = ci.value;
  const regex=/^\d{11}$/
  if (!regex.test(contenido))
    return {validaCi:true};
  return null;
}
@Directive({
  selector: '[validaCi]',
  providers: [
    {
      provide: NG_VALIDATORS, multi: true, useValue:
      validaCi
    }
  ]
})
export class ValidaCi {
}
