import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes:Quote[]=[
 new Quote('BE CAREFUL','JANE','TRY'),
 new Quote('BE CAREFUL','JANE','TRY'),
 new Quote('BE CAREFUL','JANE','TRY')
];

showHide(i:any){
  this.quotes[i].moreDetails= !this.quotes[i].moreDetails;
}
removeQuote(deleteThis:any, index:any){
  if(deleteThis){
    this.quotes.splice(index,1);
  }
}

  constructor() { 
  }

  ngOnInit(): void {
  }

}
