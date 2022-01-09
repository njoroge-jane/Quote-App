import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote('', '', '', new Date());
  
  createQuote() {
    this.addQuote.emit(this.newQuote);]
  }
  
  constructor() {}

  ngOnInit(): void {}
}
