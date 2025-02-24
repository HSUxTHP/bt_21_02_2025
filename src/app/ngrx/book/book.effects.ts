import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BookService} from '../../services/book/book.service';
import {inject} from '@angular/core';

import * as BookActions from './book.actions';
import {catchError, map, mergeMap, of} from 'rxjs';


export const bookEffects = createEffect(
  (actions$ = inject(Actions), bookService = inject(BookService)) => {
    return actions$.pipe(
      ofType(BookActions.fetchListBooks),
      mergeMap(() => bookService.getAllBooks().pipe(
        map((books: any) => BookActions.fetchListBooksSuccess({listBooks: books})),

        catchError((error) =>  of(BookActions.fetchListBooksError({error: error})))
      ))
    )
  },
  {functional: true}
);
