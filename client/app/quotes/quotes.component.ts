import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QuoteService } from '../services/quote.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Quote } from '../shared/models/quote.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quote = new Quote();
  quotes: Quote[] = [];
  isLoading = true;
  isEditing = false; 

  addQuoteForm: FormGroup;
  gallons_requested = new FormControl('', Validators.required);
  delivery_address = new FormControl('', Validators.required);
  delivery_date = new FormControl('', Validators.required);
  suggested_price = new FormControl('', Validators.required);
  total_amount = new FormControl('', Validators.required);

  constructor(private quoteService: QuoteService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getQuotes();
    this.addQuoteForm = this.formBuilder.group({
      gallons_requested: this.gallons_requested,
      delivery_address: this.delivery_address,
      delivery_date: this.delivery_date,
      suggested_price: this.suggested_price,
      total_amount: this.total_amount
    });
  }

  getQuotes() {
    this.quoteService.getQuotes().subscribe(
      data => this.quotes = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addQuote() {
    this.quoteService.addQuote(this.addQuoteForm.value).subscribe(
      res => {
        this.quotes.push(res);
        this.addQuoteForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(quote: Quote) {
    this.isEditing = true;
    this.quote = quote;
  }

  cancelEditing() {
    this.isEditing = false;
    this.quote = new Quote();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the quotes to reset the editing
    this.getQuotes();
  }

  editQuote(quote: Quote) {
    this.quoteService.editQuote(quote).subscribe(
      () => {
        this.isEditing = false;
        this.quote = quote;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteQuote(quote: Quote) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.quoteService.deleteQuote(quote).subscribe(
        () => {
          const pos = this.quotes.map(elem => elem._id).indexOf(quote._id);
          this.quotes.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
