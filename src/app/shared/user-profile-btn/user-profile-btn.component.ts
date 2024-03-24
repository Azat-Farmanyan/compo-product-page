import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile-btn.component.html',
  styleUrl: './user-profile-btn.component.scss',
})
export class UserProfileBtnComponent {
  @Input({
    required: true,
  })
  username: string = '';
}
