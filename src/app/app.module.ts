import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
import { TimePassedPipe } from './time-passed.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuotesComponent,
    QuoteDetailComponent,
    FormComponent,
    HighlightDirective,
    TimePassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
