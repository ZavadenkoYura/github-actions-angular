import { Component, Input, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  template: `
    <label class="block text-sm font-medium text-[#B0B0B0] mb-1">
      {{ label }}
    </label>
    <input
      [value]="value"
      [disabled]="disabled"
      [placeholder]="placeholder"
      [type]="type"
      (input)="handleInput($event)"
      (blur)="handleBlur()"
      class="w-full px-4 py-2 bg-[#2F2F2F] text-[#E0E0E0] border border-[#444444] rounded-md focus:outline-none focus:ring-2 placeholder:text-gray-500"
    />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: string;

  value: string = '';
  disabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: () => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  handleBlur() {
    this.onTouched();
  }
}
