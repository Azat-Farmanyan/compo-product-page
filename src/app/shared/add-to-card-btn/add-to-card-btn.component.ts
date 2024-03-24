import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-card-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-card-btn.component.html',
  styleUrl: './add-to-card-btn.component.scss',
})
export class AddToCardBtnComponent {
  addedInCard: boolean = false;
  numOfProduct: number = 0;

  addToCart() {
    this.addedInCard = true;
    this.numOfProduct = 1;
  }

  add() {
    this.numOfProduct++;
  }

  remove() {
    if (this.numOfProduct > 0) this.numOfProduct--;
    if (this.numOfProduct === 0) this.addedInCard = false;
  }
}
