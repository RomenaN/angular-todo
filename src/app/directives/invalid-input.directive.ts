import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appInvalidInput]',
})
export class InvalidInputDirective implements OnChanges {
  @Input() validatorValue: AbstractControl = {} as AbstractControl;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {}

  @HostListener('blur') onMouseLeave() {
    if (this.validatorValue.errors) {
      this.el.nativeElement.style.borderColor = 'red';
    } else {
      this.el.nativeElement.style.borderColor = 'green';
    }
  }
}
