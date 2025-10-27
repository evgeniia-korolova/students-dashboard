import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-student-entry',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './student-entry.html',
  styleUrl: './student-entry.scss',
})
export class StudentEntry {
  private fb = inject(FormBuilder);

  protected studentEntryForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    country: this.fb.control('', [Validators.required]),
    state: this.fb.control('', [Validators.required]),
    passportDeclaration: this.fb.control('', [Validators.required]),
    fitnessDeclaration: this.fb.control('', [Validators.required]),
    courseName: this.fb.control('', [Validators.required]),
    subjects: this.fb.control('', [Validators.required]),
    birthDate: this.fb.control('', [Validators.required]),
    city: this.fb.control('', [Validators.required]),
    street: this.fb.control('', [Validators.required]),
    address2: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    zip: this.fb.control('', [Validators.required]),
  });
}
