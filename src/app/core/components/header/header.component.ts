import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/input/input.component';
import { NotificationBtnComponent } from '../../../shared/notification-btn/notification-btn.component';
import { FavoriteBtnComponent } from '../../../shared/favorite-btn/favorite-btn.component';
import { CartSmallBtnComponent } from '../../../shared/cart-small-btn/cart-small-btn.component';
import { UserProfileBtnComponent } from '../../../shared/user-profile-btn/user-profile-btn.component';
import { NavBtnSmallComponent } from '../../../shared/nav-btn-small/nav-btn-small.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    NotificationBtnComponent,
    FavoriteBtnComponent,
    CartSmallBtnComponent,
    UserProfileBtnComponent,
    NavBtnSmallComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
