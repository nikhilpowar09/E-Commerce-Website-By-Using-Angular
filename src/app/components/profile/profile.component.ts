import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html', // Reference to the HTML file
  styleUrls: ['./profile.component.css'] // Reference to the CSS file (optional)
})
export class ProfileComponent {
  profileForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('Profile updated:', this.profileForm.value);
  }
}
