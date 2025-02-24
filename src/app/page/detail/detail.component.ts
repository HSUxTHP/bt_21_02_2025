import { Component } from '@angular/core';
import {BookService} from '../../services/book/book.service';
import {AsyncPipe, Location} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {bookModel} from '../../models/book.model';
import {Observable, switchMap} from 'rxjs';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButton,
    RouterLink
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  currentBook!: Observable<bookModel | undefined>;

  constructor(private bookService: BookService,
              private location: Location,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute) {
    const {number} = this.activatedRoute.snapshot.params;
    this.currentBook = this.bookService.getBookById(number);
  }



  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.currentBook = this.route.paramMap.pipe(
      switchMap(params => {
        const number = params.get('number')!;
        return this.bookService.getBookById(number);
      })
    );
  }
}
