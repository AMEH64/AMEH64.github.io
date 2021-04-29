import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ameh-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(250)
  ]);

  pronounsFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]);

  messageFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(500)
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
