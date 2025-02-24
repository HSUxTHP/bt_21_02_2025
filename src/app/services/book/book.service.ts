import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { bookModel } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {

    this.httpClient.get('https://potterapi-fedeperin.vercel.app/en/books').subscribe((data) =>
      console.log(data)
    )
  };


  getAllBooks() {
    return this.httpClient.get<bookModel[]>('https://potterapi-fedeperin.vercel.app/en/books')
  }

  getBookById(number: string): Observable<bookModel | undefined> {
    return this.getAllBooks().pipe(
      map((books: bookModel[]) => {
        const book = books.find((book: bookModel) => book.number === Number(number));
        if (!book) {
          throw new Error(`Book with number ${number} not found`);
        }
        return book;
      })
    );
  }

}
