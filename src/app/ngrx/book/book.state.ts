import {bookModel} from '../../models/book.model';

export interface BookState {

  listBooks: bookModel[];

  isFetchingListBooks: boolean;

  fetchListBooksSuccess: boolean;

  fetchListBooksError: any;

  book: bookModel;
}
