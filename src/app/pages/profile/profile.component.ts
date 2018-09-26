import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;
  passwordForm: FormGroup;
  notificationsForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.profileForm = this.fb.group({
      firstname: ['Mo', Validators.required],
      lastname: ['Sharif', Validators.required],
      email: ['mo@mosh-media.com', Validators.required],
      location: 'Mountain View, CA',
      website: 'https://www.mosh-media.com',
      describe: 'At Mosh Media we find solutions for real world problems.'
    });

    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });

    this.notificationsForm = this.fb.group({
      showLocation: ['', Validators.required],
      showAvatar: ['true', Validators.required],
      sendNotifications: ['', Validators.required],
      showUsername: ['true', Validators.required],
      showProfile: ['true', Validators.required],
      showBackups: ['', Validators.required],
    });
  }

  showSnackbar(): void {
    this.snackBar.open('Settings Updated', '', {
      duration: 3000,
    });
  }
}
