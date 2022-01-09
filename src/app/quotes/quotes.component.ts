import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes:Quote[]=[
 new Quote('Happiness is a journey, not a destination.','BUDDHA','Janey', new Date()),
 new Quote('Inspiration comes from within yourself. One has to be positive. When you’re positive, good things happen.','DEEPROY','Simon', new Date())
];

showHide(i:any){
  this.quotes[i].moreDetails= !this.quotes[i].moreDetails;
}
removeQuote(deleteThis:any, index:any){
  if(deleteThis){
    this.quotes.splice(index,1);
  }
}

anotherQuote(quote: any){
  this.quotes.push(quote);

}

  constructor() { 
  }

  ngOnInit(): void {
  }

}
