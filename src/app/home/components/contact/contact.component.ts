import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ameh-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(250)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(250)],
    ],
    pronouns: ['', [Validators.required, Validators.maxLength(50)]],
    subject: ['', [Validators.required, Validators.maxLength(50)]],
    message: ['', [Validators.required, Validators.maxLength(500)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
