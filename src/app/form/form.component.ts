import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormGroupDirective } from '@angular/forms';
import { Quote } from '../quote';
import { FormControl, FormGroup, NgForm,Validators,} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  submitted:boolean=false;

  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote('', '', '', new Date());
  
  createQuote() {
    this.addQuote.emit(this.newQuote);
  }
    form = new FormGroup({
      'quote':new FormControl(null,Validators.required  ),
      'author':new FormControl(null,Validators.required  ),
    'submittedBy':new FormControl(null,Validators.required  ),
    'date':new FormControl(null,Validators.required  )
  }
  );

  submitQuote(){
    if(this.form.valid){
      let confirmSubmit=confirm("You are about to submit a Quote.Do you want to proceed?")
    if(confirmSubmit){
    this.addQuote.emit(this.newQuote);
    this.newQuote=new Quote("","","",new Date());
    console.log(this.submitted);
    this.form.reset();
    }
    }
    else{
      this.submitted=true;
      return;
    }
    
  }
  constructor() {
  }

  ngOnInit(): void {}
}
