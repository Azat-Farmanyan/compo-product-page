import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-galeria.component.html',
  styleUrl: './product-galeria.component.scss',
})
export class ProductGaleriaComponent {
  products: string[] = ['1.png', '2.png', '3.png', '4.png', '5.png'];

  catalogFolderPath: string = '../../../../../assets/images/catalog/';

  activeItem: number = 0;
  left() {
    this.activeItem =
      this.activeItem === 0 ? this.products.length - 1 : this.activeItem - 1;
  }

  right() {
    this.activeItem =
      this.activeItem === this.products.length - 1 ? 0 : this.activeItem + 1;
  }

  setActive(id: number) {
    this.activeItem = id;
  }
}
