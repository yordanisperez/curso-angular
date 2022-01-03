import { AbstractControl } from "@angular/forms";
export class ValidaCi {
  static validaCi(ci: AbstractControl) {
    if (ci.value == null) return null;
    var contenido = ci.value;
    const regex=/^\d{11}$/
    if (!regex.test(contenido))
      return {validaCi:true};
    return null;
  }
}
