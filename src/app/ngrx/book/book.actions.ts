import {createAction, props} from '@ngrx/store';
import {bookModel} from '../../models/book.model';


export const fetchListBooks =
  createAction('[Book] fetch List Books');

export const fetchListBooksSuccess =
  createAction('[Book] fetch List Books Success', props<{ listBooks: bookModel[] }>());

export const fetchListBooksError =
  createAction('[Book] fetch List Books Error', props<{ error: any }>());

