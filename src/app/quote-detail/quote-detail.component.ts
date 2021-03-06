import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() deleteThis = new EventEmitter<boolean>();

  deleteQuote(remove: boolean) {
    this.deleteThis.emit(remove);
  }
  voteUp = 0;
  voteDown = 0;

  votingUp() {
    this.voteUp++;
  }
  votingDown() {
    this.voteDown++;
  }

  constructor() {}

  ngOnInit(): void {}
}
