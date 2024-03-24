import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductGaleriaComponent } from './product-galeria/product-galeria.component';
import { ToggleComponent } from '../../../shared/toggle/toggle.component';
import { AddToCardBtnComponent } from '../../../shared/add-to-card-btn/add-to-card-btn.component';
import { FavoriteBtnV2Component } from '../../../shared/favorite-btn-v2/favorite-btn-v2.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductGaleriaComponent,
    ToggleComponent,
    AddToCardBtnComponent,
    FavoriteBtnV2Component,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {}
