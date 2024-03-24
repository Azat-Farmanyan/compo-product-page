import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-btn.component.html',
  styleUrl: './favorite-btn.component.scss',
})
export class FavoriteBtnComponent {
  isActive: boolean = false;
}
