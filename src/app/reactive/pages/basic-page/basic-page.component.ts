import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  // myForm2 = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  // isValidField(fieldName: string): boolean | null {
  //   return (
  //     this.myForm.controls[fieldName].errors &&
  //     this.myForm.controls[fieldName].touched
  //   );
  // }

  // getFieldError(fieldName: string): string | null {
  //   if (!this.myForm.controls[fieldName]) return null;

  //   const errors = this.myForm.controls[fieldName].errors ?? {};

  //   for (const key of Object.keys(errors)) {
  //     switch (key) {
  //       case 'required':
  //         return 'Este campo es requerido';

  //       case 'minlength':
  //         return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

  //       case 'min':
  //         return `Valor mínimo de ${errors['min'].min}`;
  //     }
  //   }

  //   return null;
  // }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
