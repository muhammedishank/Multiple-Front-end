import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder , private msg:MessageService , private _router:Router ,private _snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]],

  })

  OnSubmit(){
    this.msg.sendMessage(this.contactForm.value)
    .subscribe({
      next:(v)=>{
        this._snak.open("Your application has been submited","Ok")
        this._router.navigate(["home"])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
