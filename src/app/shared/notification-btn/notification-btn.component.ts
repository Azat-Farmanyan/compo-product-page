import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-btn.component.html',
  styleUrl: './notification-btn.component.scss',
})
export class NotificationBtnComponent {
  isActive: boolean = true;
}
