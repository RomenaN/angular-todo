import { AbstractControl } from '@angular/forms';
export function yearOfBirth(control: AbstractControl) {
  if (
    new Date().getFullYear() - (new Date().getFullYear() - control.value) >
    new Date().getFullYear() - 5
  ) {
    return { yearsValid: false };
  }
  return null;
}
