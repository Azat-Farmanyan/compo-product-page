import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-btn-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-btn-v2.component.html',
  styleUrl: './favorite-btn-v2.component.scss',
})
export class FavoriteBtnV2Component {
  isActive: boolean = false;
}
