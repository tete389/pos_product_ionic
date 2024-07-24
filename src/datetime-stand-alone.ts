import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'ion-datetime',
  standalone:true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IonDatetimeValueAccessorDirective,
      multi: true
    }
  ]
})
export class IonDatetimeValueAccessorDirective implements ControlValueAccessor {
  private onChange!: (value: any) => void;
  private onTouched!: () => void;

  constructor(private el: ElementRef) {}

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('ionChange', ['$event.target.value'])
  _handleInputEvent(value: any): void {
    if (this.onChange) {
      this.onChange(value);
    }
  }

  @HostListener('ionBlur')
  _handleBlurEvent(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }
}
