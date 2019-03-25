import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quote } from '../shared/models/quote.model';

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('/api/quotes');
  }

  countQuotes(): Observable<number> {
    return this.http.get<number>('/api/quotes/count');
  }

  addQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>('/api/quote', quote);
  }

  getQuote(quote: Quote): Observable<Quote> {
    return this.http.get<Quote>(`/api/quote/${quote._id}`);
  }

  editQuote(quote: Quote): Observable<any> {
    return this.http.put(`/api/quote/${quote._id}`, quote, { responseType: 'text' });
  }

  deleteQuote(quote: Quote): Observable<any> {
    return this.http.delete(`/api/quote/${quote._id}`, { responseType: 'text' });
  }

}
