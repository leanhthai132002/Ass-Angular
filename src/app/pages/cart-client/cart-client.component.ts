import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-client',
  templateUrl: './cart-client.component.html',
  styleUrls: ['./cart-client.component.css']
})
export class CartClientComponent implements OnInit {
  @Input() items: any;

  constructor() { }

  ngOnInit(): void {
  }

}
