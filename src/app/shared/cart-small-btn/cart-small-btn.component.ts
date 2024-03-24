import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cart-small-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-small-btn.component.html',
  styleUrl: './cart-small-btn.component.scss',
})
export class CartSmallBtnComponent {
  @Input({
    required: true,
  })
  amount: number = 0;

  getAmount() {
    // Convert number to string
    let amountStr: string = this.amount.toString();

    // Use regular expression to add space every three characters from right to left
    amountStr = amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return amountStr;
  }
}
