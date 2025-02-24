import {createReducer, on} from '@ngrx/store';
import {BookState} from './book.state';

import * as BookActions from './book.actions';
import {bookModel} from '../../models/book.model';

export const initialState: BookState = {
  listBooks: [],
  isFetchingListBooks: false,
  fetchListBooksSuccess: false,
  fetchListBooksError: '',
  book: {} as bookModel,
};

export const bookReducer = createReducer(
  initialState,

  on(BookActions.fetchListBooks, (state,{type}) => {
      return <BookState>{
        ...state,
        listBooks: [],
        isFetchingListBooks: true,
      };
    }
  ),

  on(BookActions.fetchListBooksSuccess, (state, {listBooks, type}) => {
      return <BookState>{
        ...state,
        listBooks: listBooks,
        isFetchingListBooks: false,
        fetchListBooksSuccess: true,
      };
    }
  ),

  on(BookActions.fetchListBooksError, (state, {error, type}) => {
      return <BookState>{
        ...state,
        isFetchingListBooks: false,
        fetchListBooksError: error.message,
      };
    }
  ),
);
