import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book/book.service';
import {Observable} from 'rxjs';
import {bookModel} from '../../models/book.model';
import {Store} from '@ngrx/store';
import {BookState} from '../../ngrx/book/book.state';
import {RouterLink} from '@angular/router';

import * as BookActions from '../../ngrx/book/book.actions';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  book$!: Observable<bookModel[]>;

  constructor(private store: Store<{book: BookState}>,
              private bookService: BookService) {
    this.book$ = this.store.select('book', 'listBooks');
    this.store.dispatch(BookActions.fetchListBooks());
  }

  ngOnInit() {
    this.book$.subscribe(data => {
      console.log(data);
    });
  }
}
