import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-book-detail-client',
  templateUrl: './book-detail-client.component.html',
  styleUrls: ['./book-detail-client.component.css']
})
export class BookDetailClientComponent implements OnInit {
  id: string;
  book: Book;
    // Định nghĩa biến lắng nghe giá trị cho value giỏ hàng
    cartValue: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private bookService: BookService,
    private lsService: LocalStorageService
  ) {
    this.id='';
    this.book={
        _id: 0,
        name: '',
        price: 0,
        sale_price: 0,
        description:'',
        image_url: '',
        status: 0
    };
    this.cartValue = 1;
   }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id)
    this.bookService.getBook(this.id).subscribe((data) =>{
      this.book = data;
    })
  }

  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }

  onAddToCart() {
    // Định nghĩa 1 sp trong giỏ hàng có cấu trúc là gì
    const addItem = {
      ...this.book,
      value: +this.cartValue
    };
    // Nếu thực hiện như cũ, thì phía component cart sẽ không lắng nghe được

    // Thực hiện gọi lsService để component cart có thể lắng nghe thay đổi
    this.lsService.setItem(addItem);
    this.cartValue = 1;

  }

}
